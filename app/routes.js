const User = require('./models/user')

module.exports = setupRoutes;
var ObjectId = require('mongodb').ObjectId

function setupRoutes(app, passport, db) {

  // normal routes ===============================================================

  // show the home page which is the landing page (will also have our login links)
  app.get('/', function(req, res) {
      res.render('landingpage.ejs', {
        user: req.user
      });
    });


  // about us page linked to the landing Page
  app.get('/aboutus', function(req, res) {
    res.render('aboutus.ejs', {
      user: req.user
    });
  });

// contact us page
app.get('/contact', function(req, res) {
  res.render('contact.ejs', {
    user: req.user
  });
});




  // journal entries
  app.get('/feelings', isLoggedIn, async function(req, res) {
    const moodData = req.user.moodData
    res.render('main.ejs', {
      user: req.user.local
    })
  })

  app.get('/feelingsData', isLoggedIn, async function(req, res) {
    const moodData = req.user.moodData
    res.json(moodData)
  })

  app.post('/user', isLoggedIn, async function(req, res) {
    const moodData = req.user.moodData
    const newMood = [req.body.feelingSelect, req.body.feelsMessage, req.body.date]
    moodData.push(newMood)
    const user = await User.findById(req.user._id)
    user.moodData = moodData
    console.log(req.body);
    const result = await user.save()
      // res.json({ user: result })

      .then(result => {
        res.redirect('/feelings')
      })
      .catch(error => console.error(error))
  });

  app.get('/resetAll', isLoggedIn, async function(req, res) {
    const moodData = []
    const user = await User.findById(req.user._id)
    user.moodData = moodData
    console.log(req.body);
    const result = await user.save()
      // res.json({ user: result })

      .then(result => {
        res.redirect('/feelings')
      })
      .catch(error => console.error(error))
  });



  // Survey ============================
  app.get('/survey', isLoggedIn, function(req, res) {
    res.render('demographicsurvey.ejs', {
      user: req.user
    });
  });

  app.post('/surveyQ', isLoggedIn, function(req, res) {
    console.log('hello');
    console.log(req.body);

    db.collection('survey').save({
      userInformation: req.user._id,
      age: req.body.age,
      race: req.body.race,
      q1: req.body.q1,
      q2: req.body.q2,
      q3: req.body.q3,
      q4: req.body.q4,
      q5: req.body.q5,
      q6: req.body.q6,
      q7: req.body.q7,
      q8: req.body.q8,
      q9: req.body.q9,
      q10: req.body.q10,
      comment: req.body.comment,
      time: new Date(Date.now())
    })
    res.redirect('/home');
  });

  // // adminStats page
  //  app.get('/stats', isLoggedIn, isAdmin,  function(req, res){
  // // find everything put it into an array and give me the result... result will hold all of my documents
  //   db.collection('survey').find({}).toArray((err,result)=>{
  //     const arr = [ ]
  //     // item represents each document that holds all the answers
  //     result.forEach((item, i) => {
  //       if (parseInt(item.age) >= req.body.ageMin && parseInt(item.age) <= req.body.ageMax)
  //         arr.push(item)
  //
  //     });
  //     res.render('stats.ejs', {createStats: result});
  //   })
  //
  // });

  app.get('/stats', isLoggedIn, function(req, res) {
    // console.log();
    db.collection('survey').find().sort({
      _id: -1
    }).toArray((err, result) => {
      if (err) return console.log(err)
      res.render('stats.ejs', {
        createStats: result
      });
    })
  })
  // homepage

  app.get('/home', isLoggedIn, async function(req, res) {
    res.render('index.ejs', {
      user: req.user.local
    });
  })



  // meditation


  // affirmations
  app.get('/affirmations', isLoggedIn, async function(req, res) {
    res.render('affirmations.ejs', {
      user: req.user.local
    });
  })


  // mental health resources
  app.get('/resources', isLoggedIn, async function(req, res) {
    res.render('resources.ejs', {
      user: req.user.local
    });
  })


  // admin userid journal links
  // '/userIdJournals/:userid' render a dynamic url it does not matter what userid you click on
  app.get('/userIdJournals/:userid', isLoggedIn, async function(req, res) {
    const userid = req.params.userid
    db.collection('users').find({
      _id: ObjectId(userid)
    }).toArray((err, result) => {
      if (err) return console.log(err);
      console.log(result[0].moodData, "this is the result");
      console.log(result);
      res.render('viewjournals.ejs', {
        user: req.user,
        journalInfo: result[0].moodData
      });

    })
  })





  // LOGOUT ==============================
  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  // =============================================================================
  // AUTHENTICATE (FIRST LOGIN) ==================================================
  // =============================================================================

  // locally --------------------------------
  // LOGIN ===============================
  // show the login form
  app.get('/login', function(req, res) {
    res.render('login.ejs', {
      message: req.flash('loginMessage')
    });
  });
  // // login page to sign in as a returning user
  // app.get('/login', function(req, res) {
  //   res.render('login.ejs', {
  //     // user: req.user.local
  //     message: req.flash('signupMessage'),
  //   });
  // });
  // process the login form
  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/home', // redirect to the secure profile section
    failureRedirect: '/login', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
  }));

  // SIGNUP =================================
  // show the signup form
  app.get('/signup', function(req, res) {
    res.render('signup.ejs', {
      message: req.flash('signupMessage')
    });
  });

  // process the signup form
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/survey', // redirect to the secure profile section
    failureRedirect: '/signup', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
  }));

};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect('/login');
}
//admin page


function isAdmin(req, res, next) {
  if (req.user.local.isAdmin) {
    return next();
  }

  res.redirect('/login');
}
