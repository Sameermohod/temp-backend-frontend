const express = require ('express');
const Ninja = require('../models/ninja');
const cores = require("cors")
const router = express.Router();
const jwt = require ('jsonwebtoken')


//Get list of cities
router.get('/ninjas',function(req,res){
    Ninja.find()
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    });
});

// find the cities having temp greater than 40
router.get('/ninjas/highestTempCities', (req, res) => {
  Ninja.find({ maxTemp: { $gt: 45 } }).select('city -_id')
    .then(result => {
      res.json(result.map(item => item.city));
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    });
});

// city having max temp 
router.get('/ninjas/highestTempCitie', (req, res) => {
    Ninja.findOne().sort({ maxTemp: -1} ).select('city -_id')
      .then(result => {
        res.json(result);
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
      });
  });

  // low temp city
  router.get('/ninjas/lowTempCitie', (req, res) => {
    Ninja.findOne().sort({ minTemp: 1} ).select('city -_id')
      .then(result => {
        res.json(result);
      }) 
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
      });
  });

// For getting Max Temp of all
router.get('/ninjas/maxTemp', (req, res) => {
    Ninja.find().select('maxTemp city state -_id')
      .then(result => {
        res.json(result);
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
      });
  });

  // For getting Min Temp of of all
router.get('/ninjas/minTemp', (req, res) => {
    Ninja.find().select('minTemp city state -_id')
      .then(result => {
        res.json(result);
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
      });
  });

  //For all Temp Data
  router.get('/ninjas/Temp', (req, res) => {
    Ninja.find().select('maxTemp  minTemp -_id')
      .then(result => {
        res.json(result);
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
      });
  });




// add new cities
router.post('/ninjas', async function(req,res,next){
console.log(req.body)
const newData= await Ninja.create(req.body)
 const token = jwt.sign({id:newData._id},`${process.env.JWT_SECRET_KEY}`
  
 )
 res.status(201).json({
  status:"success",
  token,
  data:{
    data:newData,
  }
 })
});


// login 
router.post('/ninjas/login', async function(req,res,next){
  const {city,state}=req.body;

if(!city || !state){
  return res.status(400).json({
    message:'invalid details'
  })
}

  const token='';
  res.status(200).json({
    status:"success",
    token,
  })

  });

//update cities
router.get('/ninjas/:city', async (req, res) => {
    const { city } = req.params;
    const data = req.body;
    try {
      const temperature = await Ninja.findOneAndUpdate({ city: city }, data);
      if (!temperature) {
        res.status(404).json({ message: 'Temperature data not found.' });
      } else {
        res.status(200).json(temperature);
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
})




// update only min temp of perticular city
router.put('/ninjas/:city/min', async (req, res) => {
    const { city } = req.params;
    const data = req.body;
    try {
      const temp = await Ninja.findOneAndUpdate({ city: city }, data);
      if (!temp) {
        res.status(404).json({ message: 'Temperature data not found.' });
      } else {
        res.status(200).json(temp.minTemp);
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
})


// update only max temp of perticular city
router.put('/ninjas/:city/max', async (req, res) => {
    const { city } = req.params;
    const data = req.body;
    try {
      const temp = await Ninja.findOneAndUpdate({ city: city }, data);
      if (!temp) {
        res.status(404).json({ message: 'Temperature data not found.' });
      } else {
        res.status(200).json(temp.maxTemp);
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
})

// delete Cities
router.delete('/ninjas/:city',function(req,res){
    const city = req.params.city
    Ninja.findOneAndDelete({city})
    .then(result => {
        if (!result) {
          res.status(404).json({ error: 'City not found' });
        } else {
          res.json({ message: 'City deleted successfully' });
        }
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
      });
    
});


module.exports=router