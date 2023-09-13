module.exports = (sequelize, DataType) => {
    const Todo = sequelize.define("product", {
        p_id: {
            type: 'int',
            allownull: false
        },
        p_name: {
            type: 'varchar(20)',
            allownull: false
        },
        p_cost: {
            type: 'int',
            allownull: false
        }
    })
    return Todo
}

/*
    where define function has two arguments
        - First argument is name of table
        - name of the table -> 's' auto appended with the name
        - i.e. 'product' table will be as 'products'
        - Second argument is json of fields
        - key is name of field value is json of type.
        - in json of type key is type value of data.
*/
