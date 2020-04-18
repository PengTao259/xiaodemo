








      // forEach
      //  遍历数组每一项元素  类似于原生的for in
      // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      // const arr = [
      //    {
      //       id:1,
      //       name:'花姐',
      //       hobby:'jump',
      //       age:18,
      //       done:true
      //    },{
      //       id:2,
      //       name:'昌哥',
      //       hobby:'sing',
      //       age:20,
      //       done:false
      //    },{
      //       id:3,
      //       name:'老湿',
      //       hobby:'say Hi',
      //       age:19,
      //       done:true
      //    }
      // ];

      // arr.forEach((ele,index) => {
      //    console.log(ele,index);
      // });




      // some
      // 遍历数组中每一项元素，如果有满足条件的元素，则返回true 没有则返回false
      // const todo = arr.some((ele,index)=>{
      //    return ele < 9
      // })
      // console.log(todo);



      // every
      // 判断数组中的所有元素是否满足某个条件
      // const todo = arr.every((ele, index) => {
      // //   console.log(ele, index);
      //   return ele < 20
      //   // console.log(ele[0]);
      // });
   
      // console.log(todo);
      


      // filter
      // 根据条件从数组中遍历出一个满足条件的新数组 
      // const todo = arr.filter((item,index)=>{
      //    return item > 3
      // })
      // console.log(todo);
      

      // findIndex
      // 查询指定条件的索引值
      // const todo = arr.findIndex((e,i)=>{
      //    return e === 3
      // })
      // console.log(todo);
      

      // includes
      // 查询数组中是否包含某个元素 并返回一个布尔值
      // console.log(arr.includes(3));
      

         

      
      // concat
      // 拼接数组

      // var arr2=[11,[12,13]] 
      // var arrCopy = arr.concat(arr2);	
      // console.log(arrCopy); // [1, 2, 3, 4, 11, Array(2)]




      // 案例根据id寻找指定索引
      // var todo = arr.findIndex((item)=>{
      //    return item.id === 3
      // })
      // console.log(todo);
      // const newArr = arr.splice(todo,1);
      // console.log(newArr);
         

      var arr=[1,2,3,4];
      /**
       * 举几个数组简单的方法 
       */
      // 第一个最简单的push从最后推入一个元素 返回值是数组的长度
      // console.log(arr.push(6));
      // console.log(arr);
      
      // 第二个简单的方法unshift 从数组的最前面添加一个元素 并返回数组的长度 
      // console.log(arr.unshift(6));
      // console.log(arr);
      
      // 第三个简单方法pop将数组最后一个元素删除，并返回这个元素值
      // console.log(arr.pop());
      // console.log(arr);

      // 第四个简单方法shift 从第一个元素删除并返回这个元素的值 同样不需要加参数
      // console.log(arr.shift());
      // console.log(arr);

      // 第五个简单的方法slice 截取数组 第一个参数必选 ，从谁开始截取 如果是负数  则从尾部开始截取
      //                              第二个参数可选, 从谁结束  
      // 这个方法用来截取数组 返回一个子数组 并不会改变原数组 
      // console.log(arr.slice(-1,));
      
      // 第六个简单方法 splice 删除数组 
      
      
      
      
      

      
      







