const authService = require('../services/authService');
const { setUserToken } = require('../utils/jwt');
const logger = require('../config/logger');
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');

// 로그인
exports.login = async (req, res, next) => {
  try {
    const user = await authService.login(req.body);

    logger.info(`Login Success : ${user.email}`);

    //UserToken 생성 후 response 헤더 cookie에 토큰 값 저장
    setUserToken(res, user.email);

    res.status(200).json({
      message: 'Login Success',
      info: '성공 후 메인 페이지 화면으로 리다이렉트 할 예정',
    });
    // res.redirect('/');
  } catch (e) {
    next(e);
    res.status(500).json('[ERROR] Login is FAILED');
  }
};

// 로그아웃
exports.logout = async (req, res) => {
  if (!req.get('token')) {
    throw new ApiError(httpStatus[400], 'User Token is not exist');
  }

  try {
    res.clearCookie('token');
    // res.clearCookie('token').redirect('/login');

    res.status(200).json({
      message: 'Logout Success',
      info: '성공 후 메인 로그인 화면으로 리다이렉트 할 예정',
    });
  } catch (e) {
    next(e);
    res.status(500).json('[ERROR] Logout is FAILED');
  }
};

// 회원가입
exports.join = async (req, res, next) => {
  try {
    const user = await authService.join(req.body);

    if (user === 'EXIST') {
      res.status(500).json('EXIST');
    }

    //UserToken 생성 후 response 헤더 cookie에 토큰 값 저장
    setUserToken(res, user.email);

    logger.info(`Join Success : ${user.email}`);

    res.status(200).json({
      id: user.email,
      message: '성공 후 메인 페이지 또는 로그인 화면으로 리다이렉트 할 예정',
    });
  } catch (e) {
    next(e);
    res.status(500).json('[ERROR] Join is FAILED');
  }
};
