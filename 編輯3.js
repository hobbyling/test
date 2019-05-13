/**
@api {POST} users/userinfo.asp [编辑资料]
@apiVersion 0.1.2
@apiName userinfo
@apiGroup users
@apiSampleRequest off
@apiDescription 编辑用户资料
@apiParam {String} userid 用户id
@apiParam {String} username 用户名
@apiSuccess {Object}   data  对象数据
@apiSuccess {String}   data.userheadimg     头像
@apiSuccess {String}   data.username     用户名
@apiSuccess {String}   data.userphone     手机号
@apiExample 返回示例
HTTP/1.0 0 ok
{
    data =     {
        userheadimg = "http://xxxxxxx/api/user/2017/11/13/5EC93450A72741FA92AB4E08D4A96710.jpg";
        username = markmiao;
        userphone = 13000000000;
        usersex = "男";
    };
}


@api {POST} users/userinfo.asp [test]
@apiVersion 0.1.2
@apiName userinfo
@apiGroup users
@apiSampleRequest off
@apiDescription 编辑用户资料
@apiParam {String} userid 用户id
@apiParam {String} username 用户名
@apiSuccess {Object}   data  对象数据
@apiSuccess {String}   data.userheadimg     头像
@apiSuccess {String}   data.username     用户名
@apiSuccess {String}   data.userphone     手机号
@apiExample 返回示例
HTTP/1.0 0 ok
{
    data =     {
        userheadimg = "http://xxxxxxx/api/user/2017/11/13/5EC93450A72741FA92AB4E08D4A96710.jpg";
        username = markmiao;
        userphone = 13000000000;
        usersex = "男";
    };
}
*/