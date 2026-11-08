const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

var stats =[
    {
        'city': 'San Juan', 
        'zip': '00926', 
        'state': 'PR', 
        'income': '34781',
        'age': '44'
    },
    {
        'city': 'Corona', 
        'zip': '11368', 
        'state': 'NY', 
        'income': '50797',
        'age': '32'
    },
    {
        'city': 'Chicago', 
        'zip': '60629', 
        'state': 'IL', 
        'income': '42019',
        'age': '31'
    },
    {
        'city': 'El Paso', 
        'zip': '79936', 
        'state': 'TX', 
        'income': '54692',
        'age': '31'
    },
    {
        'city': 'Los Angeles', 
        'zip': '90011', 
        'state': 'CA', 
        'income': '36954',
        'age': '28'
    },
    {
        'city': 'Norwalk', 
        'zip': '90650', 
        'state': 'CA', 
        'income': '66453',
        'age': '35'
    }
]

/*
async function task1() {
    try {
        await client.connect();

        const db = client.db('statsdb');

        console.log('Database statsdb selected successfully!');
    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}

task1();

*/

/*
async function task2() {
    try {
        await client.connect();

        const db = client.db('statsdb');

        await db.createCollection('uscensus');

        console.log('Collection uscensus created successfully!');
    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}

task2();  
*/      
/*
async function task3() {
    try {
        await client.connect();

        const db = client.db('statsdb');
        const collection = db.collection('uscensus');

        const result = await collection.insertMany(stats);

        console.log(result.insertedCount + ' records inserted successfully!');
    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}

task3();
*/

/*
async function task4() {
    try {
        await client.connect();

        const db = client.db('statsdb');
        const collection = db.collection('uscensus');

        const newRecords = [
            {
                city: 'Pacoima',
                zip: '91331',
                state: 'CA',
                income: '60360',
                age: '33'
            },
            {
                city: 'Ketchikan',
                zip: '99950',
                state: 'AK',
                income: '00000',
                age: '00'
            }
        ];

        const result = await collection.insertMany(newRecords);

        console.log(result.insertedCount + ' additional records inserted successfully!');
    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}

task4();
*/

/*
async function task5() {
    try {
        await client.connect();

        const db = client.db('statsdb');
        const collection = db.collection('uscensus');

        const query = { city: 'Corona', state: 'NY' };

        const result = await collection.findOne(query);

        console.log('The ZIP code for Corona, NY is: ' + result.zip);
    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}

task5();
*/

/*
async function task6() {
    try {
        await client.connect();

        const db = client.db('statsdb');
        const collection = db.collection('uscensus');

        const query = { state: 'CA' };

        const results = await collection.find(query).toArray();

        console.log('Income for all cities in California:');

        results.forEach(function(record) {
            console.log(record.city + ': $' + record.income);
        });

    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}

task6();
*/

/*
async function task7() {
    try {
        await client.connect();

        const db = client.db('statsdb');
        const collection = db.collection('uscensus');

        const query = { state: 'AK' };

        const newValues = {
            $set: {
                income: '38910',
                age: '46'
            }
        };

        const result = await collection.updateMany(query, newValues);

        console.log(result.modifiedCount + ' Alaska record updated successfully!');

    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}

task7();
*/

async function task8() {
    try {
        await client.connect();

        const db = client.db('statsdb');
        const collection = db.collection('uscensus');

        const results = await collection.find({})
            .sort({ state: 1 })
            .toArray();

        console.log('Records sorted by state in ascending order:');

        results.forEach(function(record) {
            console.log(
                record.city + ', ' +
                record.state + ' - ZIP: ' +
                record.zip + ', Income: ' +
                record.income + ', Age: ' +
                record.age
            );
        });

    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}

task8();