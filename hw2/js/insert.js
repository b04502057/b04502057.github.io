// 當文件已經全載入至記憶體時，開始執行程式
$(() => {

    $('#insert').on('click', function() {

        // 取得商品資料
        var data = {
            item: {
                name: $('#inputProductName').val(),
                price: Number($('#inputProductPrice').val()),
                count: +$('#inputProductCount').val(),
                image: $('#inputProductImage').val(),
            }
        }

        // 新增商品
        $.post('https://js.kchen.club/B04502057/insert', data, function(response) {
            if (response) {
                // 伺服器有回傳資料
                if (response.result) {
                    $('#message').text('新增成功')
                    console.log(response.item)
                    $('#dialog').modal('show')
                } else {
                    $('#message').text('新增失敗')
                    console.log(response.message)
                    $('#dialog').modal('show')
                }
            } else {
                $('#message').text('伺服器出錯')
                $('#dialog').modal('show')
            }
        })
    })





    
    //go back to the search page
    $('#back').on('click', function() {
        window.location.href='index.html';
    })

    $('#cal').on('click', function() {
        var c=$('#in').val().split();
        for(i=0;i<c.length;i++){
            var d=0;
            d=d+c[i];

        }
        $('#out').val()=d;
    })



})
tags: 前端程式設計