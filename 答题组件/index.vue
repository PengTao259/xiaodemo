<template>
  <div class="quset">
      <!-- 当前答题 -->
      <div class="title">{{nowAnswerIndex+1}}/{{questionList.length}}</div>

      <!-- 模板 -->
      <div v-for="(item,index) in questionList" :key="item.key" class="box">
          <template v-if="index == nowAnswerIndex">
                <!-- 标题 -->
                <div  class="ques">{{item.question}}</div>
                <!-- 渲染模板 -->
                <div class="content" v-if="item.questionType==1">
                    <van-radio-group >
                        <van-radio 
                        name="answerItem.key" 
                        v-for="answerItem in item.answer" 
                        :key="answerItem.key"
                        @click="changeNowAnswer()">{{answerItem.key+"         "+answerItem.val}}</van-radio>
                    </van-radio-group>
                </div>
                <div class="content" v-else-if="item.questionType==2">  
                    <div @click="showup">请选择所在行业</div>
                    <van-popup v-model="show" position="bottom">
                        <van-picker
                        show-toolbar
                        :columns="item.answer"
                        @cancel="onCancel"
                        @confirm="onConfirm"
                        />
                    </van-popup>
                </div>

                <div class="content" v-else-if="item.questionType==3">
                    <div @click="showup">请选择您的年龄<van-icon name="arrow-down" /></div>
                    <van-popup v-model="show" position="bottom">
                        <van-picker
                        show-toolbar
                        :columns="columns"
                        @cancel="onCancel"
                        @confirm="onConfirm"
                        />
                    </van-popup>
                </div>

                <div class="content" v-else-if="item.questionType==4">
                    <div @click="showup">请选择您所在城市<van-icon name="arrow-down" /></div>
                    <van-popup v-model=<template>
  <div class="quset">
      <!-- 当前答题 -->
      <div class="title">{{nowAnswerIndex+1}}/{{questionList.length}}</div>

      <!-- 模板 -->
      <div v-for="(item,index) in questionList" :key="item.key" class="box">
          <template v-if="index == nowAnswerIndex">
                <!-- 标题 -->
                <div  class="ques">{{item.question}}</div>
                <!-- 渲染模板 -->
                <div class="content" v-if="item.questionType==1">
                    <van-radio-group >
                        <van-radio 
                        name="answerItem.key" 
                        v-for="answerItem in item.answer" 
                        :key="answerItem.key"
                        @click="changeNowAnswer()">{{answerItem.key+"         "+answerItem.val}}</van-radio>
                    </van-radio-group>
                </div>
                <div class="content" v-else-if="item.questionType==2">  
                    <div @click="showup">请选择所在行业</div>
                    <van-popup v-model="show" position="bottom">
                        <van-picker
                        show-toolbar
                        :columns="item.answer"
                        @cancel="onCancel"
                        @confirm="onConfirm"
                        />
                    </van-popup>
                </div>

                <div class="content" v-else-if="item.questionType==3">
                    <div @click="showup">请选择您的年龄<van-icon name="arrow-down" /></div>
                    <van-popup v-model="show" position="bottom">
                        <van-picker
                        show-toolbar
                        :columns="columns"
                        @cancel="onCancel"
                        @confirm="onConfirm"
                        />
                    </van-popup>
                </div>

                <div class="content" v-else-if="item.questionType==4">
                    <div @click="showup">请选择您所在城市<van-icon name="arrow-down" /></div>
                    <van-popup v-model=