import request from 'superagent';

export default store => next => action => {
  if (action.type === 'GETTVALUE') {
    request.get('/hello')
      .end((err, res) => {
        next({type: action.type, value: res.body})
      });
  }
  else
    next(action);
};
