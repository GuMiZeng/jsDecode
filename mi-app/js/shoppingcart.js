var product = new Vue({
    el:'#product',
    data:{
        count: 1,
        checked: false,
        deleteProduct: false,
        product:[
            {
                name:'米家小白智能摄像机 白色',
                price:"399",
                num:1,
                single_total:399,
                img_src:"../img/shopping/shopping-img.jpg",
                choose:true,
                item_name:['+25元的小米活塞耳机 清新版','+14.9元得米家随身风扇','+18元得最生活毛巾·青春系列']
            },
            {
                name:'小米手机5s 高配全网通版 3GB内存 哑光金色 64GB',
                price:"1999",
                num:1,
                single_total:1999,
                img_src:"../img/shopping/shopping-img01.jpg",
                choose:true,
                item_name:['+39元得小米自拍杆（线控版）','+1元得小米礼品袋','+14.9元得米家LED随身灯']
            }
        ]
    },
    computed:{
        total_num: function () {
            var total = 0;
            for(var i = 0; i< this.product.length; i++){
                total +=  this.product[i].num;
            }
            return total;
        },
        total_price:function () {
            var total = 0;
            for(var i = 0; i< this.product.length; i++){
                total +=  this.product[i].single_total;
            }
            return total;
        }

    },
    methods:{
        sub:function (index) {
            if(this.product[index].num > 1){
                this.product[index].num -= 1;
                this.product[index].single_total = this.product[index].num * this.product[index].price;
            }else {
                return false;
            }
        },
        input_add:function (index) {
            this.product[index].num += 1;
            this.product[index].single_total = this.product[index].num * this.product[index].price;

        },
        choose:function (index) {
            this.product[index].choose = !this.product[index].choose;
        },
        del_product:function (index) {
            this.product.splice(index,1);
            if(this.product.length == 0){
                console.log(this.deleteProduct);

                return this.deleteProduct = !this.deleteProduct;
            }
        }
    }
});