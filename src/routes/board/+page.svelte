<script>
    // 데이터란 변수로 밖에 못받음
    // 여기서 많이 시간 날림...
    export let data;
    let employeeInfo = data;

    /**
     * page var
     * */
    // 한 페이지당 보여질 데이터 개수
    let pageLimit = 3;
    // 총 페이지 개수
    let totalNavPage = Math.ceil(employeeInfo.totalCount/pageLimit);
    // 현재 페이지
    let currentNavPage = 1;
    // 네비게이션 시작 페이지
    let startNavPage = 1;
    // 네비게이션에 보여질 페이지 개수
    let pageNavSize = 2;
    // 네비게이션 마지막 페이지
    let endNavPage = totalNavPage > pageNavSize ? pageNavSize : totalNavPage;

    /**
     * 사원 데이터 조회
     * @param {int} pageNo
     * 조회할 페이지
     * @param {int} pageLimit
     * 조회할 페이지의 데이터 개수
     * */
    const getEmployeeInfo = async (pageNo = 1, pageLimit = 5) => {
        const response = await fetch(`http://localhost:8080/employee/list/${pageNo}/${pageLimit}`, {method: "GET"})

        currentNavPage = pageNo;
        employeeInfo = await response.json();
    }

    /**
     * 페이지 앞, 뒤 이동 기능
     * @param {string} action
     * pre : 앞 페이지로 이동
     * next : 뒤 페이지로 이동
     * */
    const clickPreNext = action => {
        if(action === 'pre') {
            endNavPage = startNavPage - 1;
            startNavPage -= pageNavSize;
            currentNavPage = endNavPage;
            getEmployeeInfo(currentNavPage, pageLimit);
        } else if(action === 'next') {
            startNavPage = endNavPage + 1;
            endNavPage = startNavPage + pageNavSize-1 <= totalNavPage ? startNavPage + pageNavSize-1 : totalNavPage
            currentNavPage = startNavPage;
            getEmployeeInfo(currentNavPage, pageLimit);
        } else {

        }
    }

</script>
<h1 class="bg-gray-200">
    내 테스트 공간이야
</h1>


<!--전체-->
<div class="h-[900px]">

    <!--테이블영역-->
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <!-- 컬럼영역-->
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>

                <th scope="col" class="px-6 py-3">
                    사원명
                </th>

                <th scope="col" class="px-6 py-3">
                    소속
                </th>
                <th scope="col" class="px-6 py-3">
                    직급
                </th>

            </tr>
            </thead>
            <!--테이블 컨텐츠 영역-->
            <tbody>

<!--                <tr class=" bg-white border-b dark:bg-gray-800 dark:border-gray-700">-->
<!--                    <th scope="row"-->
<!--                        class=" px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">-->
<!--                        사원명-->
<!--                    </th>-->
<!--                    <td class="px-6 py-4">-->
<!--                        소속-->
<!--                    </td>-->
<!--                    <td class="px-6 py-4">-->
<!--                        직급-->
<!--                    </td>-->

<!--                </tr>-->

                {#each employeeInfo.employeeList as employee}
                    <tr class=" bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row"
                            class=" px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {employee.name}
                        </th>
                        <td class="px-6 py-4">
                            {employee.department}
                        </td>
                        <td class="px-6 py-4">
                            {employee.rank}
                        </td>

                    </tr>
                {/each}

            </tbody>
        </table>
    </div>

    <!-- 페이징 영역-->
    <div class="grid min-h-[40px] w-full place-items-center overflow-x-scroll rounded-lg p-2 lg:overflow-visible ">
        <nav>
            <ul class="flex">
                {#if startNavPage !== 1}
                    <li>
                        <a on:click={() => clickPreNext("pre") }
                           class="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                           href="#nons" aria-label="Previous">
                            <span class="sr-only">Previous</span>
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                      clip-rule="evenodd"></path>
                            </svg>
                        </a>
                    </li>
                {/if}

                {#each Array.from({length:endNavPage - startNavPage + 1}, (_, index) => index + startNavPage) as pageNum}
                    <li>
                        <a class="mx-1 flex h-9 w-9 items-center justify-center rounded-full p-0 text-sm transition duration-150 ease-in-out {pageNum === currentNavPage ? 'bg-pink-500 text-white shadow-md' : 'border border-blue-gray-100 bg-transparent text-blue-gray-500 hover:bg-light-300'}"
                           href="#none" on:click={() => getEmployeeInfo(pageNum, pageLimit)}>{pageNum}</a>
                    </li>
                {/each}


<!--                <li>-->
<!--                    <a class="mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-pink-500 p-0 text-sm text-white shadow-md transition duration-150 ease-in-out"-->
<!--                       href="#none">1</a>-->
<!--                </li>-->
<!--                <li>-->
<!--                    <a class="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"-->
<!--                       href="#none">2</a>-->
<!--                </li>-->
<!--                <li>-->
<!--                    <a class="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"-->
<!--                       href="#none">3</a>-->
<!--                </li>-->
                {#if endNavPage !== totalNavPage}
                    <li>
                        <a on:click={() => clickPreNext("next")}
                                class="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                                href="#none" aria-label="Next">
                            <span class="sr-only">Next</span>
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                      clip-rule="evenodd"></path>
                            </svg>
                        </a>
                    </li>
                {/if}

            </ul>
        </nav>
    </div>

</div>