
var products = [{
        price: 6,
        special: 1
    },
    {
        price: 10,
        special: 1
    }

];
var full_sub = [{
        full: 5,
        sub: 1
    },
    {
        full: 16,
        sub: 6
    }
];



var first=readline().split(" ");
var n = parseInt(first[0]);
var m=parseInt(first[1]);
var products=[];
var full_sub=[];
for(var i=0;i<n;i++)
{
    let product=readline().split(" ");
    products.push({
        price:Number(product[0]),
        special:Number(product[1])
    })

}
for(var j=0;j<m;j++)
{
    let temp=readline().split(" ");
    full_sub.push({
        full:Number(temp[0]),
        sub:Number(temp[1])
    })
}


print(min_money(products, full_sub));
// print(min_money(products, full_sub));
// a为商品，b为满减
// 返回一个价格 两位小数
// 特价为8折
// 两种选择，一种满减，一种全特价
function min_money(a, b) {
    var sp = 0;
    var full = 0,
        max_sub = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i].special == 1) {
            sp = sp + a[i].price * 0.8;
        } else {
            sp = sp + a[i].price;
        }
        full = full + a[i].price;

    }
    for (var j = b.length - 1; j >= 0; j--) {
        if (full >= b[j].full) {
            max_sub = Math.max(max_sub, b[j].sub);
        }
    }
    full = full - max_sub;
    return Math.min(full, sp).toFixed(2);

}