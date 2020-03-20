<template>
  <div>
    <table class="table table-hover table-puc"
    element-loading-spinner="el-icon-loading"
    v-loading="loading"
    element-loading-text="拼命加载中"
    v-show="moiveList"
    >
      <thead class="table-header">
        <tr>
        <th width="*">电影名称</th>
        <th width="*">电影年份</th>
        <th width="*">电影海报</th>
        <th width="*" colspan="3">导演</th>
        <th width="150">操作</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="(item,idx) in moiveList" :key="idx">
        <td>
          <a href="javascript:void(0);">{{item.title}}</a>
        </td>
        <td>{{item.year}}年</td>
        <td><img :src="item.images.small" alt="暂无图片"></td>
        <td v-for="(cast,index) in item.casts" :key="index">
          <span>{{cast.name}}</span>
        </td>
        <td>
          <a href="javascript:void(0)" @click="editSelect(item)">编辑</a>&nbsp;&nbsp;/&nbsp;&nbsp;
          <a href="javascript:void(0)" @click="deleteSelect(item)">删除</a>
        </td>
      </tr>
      </tbody>
    </table>
    <el-pagination
    v-show="moiveList.length"
    layout="total, prev, pager, next"
    :current-page="moivePagination.page"
    :page-size="moivePagination.size"
    :total="moivePagination.total"
    @current-change="changeMoivePageIdx"
    >
  </el-pagination>
  </div> 
</template>

<script>
import { mapState, mapActions , mapGetters} from 'vuex';
export default {
  data() {
    return {};
  },
  computed:{
    ...mapState([
      'loading',
      'moivePagination'
    ]),
    ...mapGetters([
      'moiveList'
    ])
  },
  created() {
    this.$store.dispatch('getMoive')
    
  },
  methods: {
    // 修改页码
    changeMoivePageIdx(val){
      this.$store.commit('setMoivePageIdx',val)
    },
    // 删除选中
    editSelect(val){
      alert('你确定要编辑选中<'+ val.title+'>吗?')
    },
    // 删除选中
    deleteSelect(val){
      alert('你确定要删除<'+val.title+'>吗?')
    },
    ...mapActions([
      'getMoive'
    ])
  }
};
</script>