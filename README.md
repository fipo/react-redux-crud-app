Create a simple application using React that will be able to C,R,U,D product items. Each product item is having the following attributes - name, price, currency.

// simple example of a JSON object of a list containing 2 products
{
    "products" : [
        {
            "name" : "TV",
            "price" : 1000,
            "currency" : "USD"
        },
        {
            "name" : "SSD",
            "price" : 100,
            "currency" : "USD"
        },
    ]
}

Requirements:
1. Create form with 3 fields (name, price, currency) and a button that is triggering the creation of the products;
2. A list of products already created (could be a simple table). Each row should display the attributes (name, price, currency), plus additional action buttons:
 * delete button (for each table row) - should be implemented as a component that is doing a delete request to the API including a confirmation (could be a fake/mocked  API);
 * Update button (similar to deletion - defined as separate component).

3. Permission service
Each of the 4 elements above should ask a permission service if they should be shown to the user or NOT (depending on the API response);

// simple API response with permissions (request could be implemented on "/permissions" e.g.)
{
    "permissions" : ['CREATE','READ','UPDATE','DELETE']
}

Behaviour of the permission service:
* If we remove the 'DELETE' permission from the array - all delete buttons should not be presented.
* Similar behaviour for  "UPDATE buttons", "CREATE Form" and the list of the items (READ)
