<script>

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

                <tr class=" bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row"
                        class=" px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        사원명
                    </th>
                    <td class="px-6 py-4">
                        소속
                    </td>
                    <td class="px-6 py-4">
                        직급
                    </td>

                </tr>

            </tbody>
        </table>
    </div>

    <!-- 페이징 영역-->
    <div class="grid min-h-[40px] w-full place-items-center overflow-x-scroll rounded-lg p-2 lg:overflow-visible ">
        <nav>
            <ul class="flex">
                <li>
                    <a
                       class="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                       href="#" aria-label="Previous">
                        <span class="sr-only">Previous</span>
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                  clip-rule="evenodd"></path>
                        </svg>
                    </a>
                </li>
                <li>
                    <a class="mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-pink-500 p-0 text-sm text-white shadow-md transition duration-150 ease-in-out"
                       href="#">1</a>
                </li>
                <li>
                    <a class="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                       href="#">2</a>
                </li>
                <li>
                    <a class="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                       href="#">3</a>
                </li>


            </ul>
        </nav>
    </div>

</div>