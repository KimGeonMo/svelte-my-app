export const prerender = true;

export async function load({fetch}) {
    const response = await fetch(`http://localhost:8080/employee/list/1/3`, {method: "GET"})
    const responseJson = await response.json();

    return responseJson;
}