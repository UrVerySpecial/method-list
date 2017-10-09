var mongoose = require('mongoose')
let Method = require("../models/method")
let Application = require("../models/application")

exports.getMethods = (req, res) => {
  return Method.find(function (err, methods) {
		if (!err) {
      console.log(methods)
			res.json(methods)
		} else {
			return console.log(err);
		}
	})
}
exports.getMethod = (req, res) => {
  console.log(req.params.id)
  return Method.findById(req.params.id).populate('applications').exec((err, method) => {
  // return Method.findById(req.params.id, function (err, method) {
    console.log(method)
    if (!err) {
      res.json(method)
    } else {
      console.log(err)
      res.send(err)
    }
  })
}
exports.createMethod = (req, res) => {
  console.log(req.body)
  let newMethod = new Method(req.body)
  newMethod.save(err => {
    if (err) {
      res.send(err)
    }
    res.json({message: 'method created' })
  })
}
exports.newApplication = (req, res) => {
  console.log(req)
  console.log(req.body)
  let newApplication = new Application(req.body)
  newApplication.createDate = new Date()
  Method.findById(req.params.id, function (err, method) {
    if (err) {
      console.log(err)
      return res.send(err)
    }
    newApplication.save(err=> {
      if (err) {
        return res.send(err)
      }
      method.applications.push(newApplication)
      method.save(err => {
        if (err) {
          res.send(err)
        }
        res.json({message: 'method updated' })
      })
    })
  })
}
exports.addLike = (req, res) => {
  console.log(req.params.applicationId)
  return Application.findById(req.params.applicationId, function (err, application) {
    if (err) {
      console.log(err)
      return res.send(err)
    }
    if (application.likeCount) {
      application.likeCount += 1
    } else {
      application.likeCount = 1
    }
    application.save(err=> {
      if (err) {
        return res.send(err)
      }
      res.json({message: 'application updated' })
    })
  })
}