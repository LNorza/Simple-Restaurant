export const getPersonal = async () => {
    const resp = await fetch(
        "https://simplerestaurant-api-production.up.railway.app/api/employees"
    ).then((response) => response.json());

    return resp;
};
