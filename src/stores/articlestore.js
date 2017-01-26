/*****
var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var objectAssign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var CHANGE_EVENT = 'change';
var moment = require('moment'); 
var _store = {
  firstname: null,
  lastname: null,
  subjects: null,
  abstract: null,
  article: null,
  submissiondate: moment().format('YYYY-MM-DD'),
  status: 'null'
};

var updateStatus = function(item) {
  _store.status = item;
};

export default class Article {

    setFirstName(item){
      _store.firstname = item;
    }

    setLastName(item){
      _store.lastname = item;
    }

    setArticle(item) {
      _store.article = item;
    }

    setAbstract(item){
      _store.abstract = item;
    }

    setSubjects(item){
      _store.subjects = item;
    }
};

var ArticleStore = objectAssign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  getStatus: function(){
    return _store.status;
  },
  getArticleData: function() {
    return _store;
  }
});
//
AppDispatcher.register(function(payload){
  var action = payload.action;
  switch(action.actionType){
    case appConstants.SAVE_CLICKED:  
      ArticleStore.emit(CHANGE_EVENT);
      break;
    case appConstants.STATUS:
      _store.status = action.data;
      break;
    case appConstants.FIRSTNAME:
      Article.setFirstName(action.data);
      break;
    case appConstants.LASTNAME:
      Article.setLastName(action.data);
      break;
    case appConstants.ABSTRACT:
      Article.setAbstract(action.data);
      break;
    case appConstants.ARTICLE:
      Article.setArticle(action.data);
      break;
    case appConstants.SUBJECTS:
      Article.setSubjects(action.data)
      break;
    default:
      return true;
  }
});
module.exports = ArticleStore;
******/