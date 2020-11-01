const routes = require("express").Router();
const Workout = require("../public/workoutModel");

// creates workouts
routes.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

// finds workouts 
routes.get("/api/workouts", (req, res) => {
    Workout.find()
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
});

routes.get("/api/workouts/range", function (req, res) {
    db.find({}).limit(15)
        .then(dbWorkouts => {
            console.log(dbWorkouts)
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
})

//update
routes.put("/api/workouts/:id", function (req, res) {
    db.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } }, { new: true })
        .then(function (records) {
            console.log("put route", records)
            res.json(records)
        })
        .catch(error=>{
            res.json(error)
        });
});

module.exports = routes;