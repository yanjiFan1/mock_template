var express = require('express');
var router = express.Router();
const Mock = require('mockjs');

let db = Mock.mock({
    'data|3-6': [{
        id: '@id',
        name: '@name',
        'age|18-32': 1
    }]
});

// 测试使用
router.post('/haitao/getItemList', function(req, res, next) {
	let data = Mock.mock({
		"code|1":[200,406]
	})
    res.json({
        code: data.code,
        msg: "111",
        data: {
            bbb:111
        }
    });
});



module.exports = router;