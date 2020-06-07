/**
 * @description: 给vue添加全局方法
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-06-02 10:57:10
 * @LastAuthor: lizlong
 * @lastTime: 2019-08-05 13:15:30
 */

import service from "@/utils/request";
import formDateservice from "@/utils/formDateRequest";
import serviceJson from "@/utils/requestJson";
import api from "@/api/api";
import code from "@/code/code";
const pageGroup = [20, 40, 100, 200];

export default {
  install(Vue) {
    Vue.prototype.$axios = service; //axios全局方法(正常form提交)
    Vue.prototype.$formDateAxios = formDateservice; //axios全局方法(正常form提交)
    Vue.prototype.$json = serviceJson; //axios全局方法（json格式提交）
    Vue.prototype.$api = api; //api地址全局方法
    Vue.prototype.$code = code; //code状态码全局方法
    Vue.prototype.$pageGroup = pageGroup; //分页下拉组

    //自定义类型的提示，默认info
    Vue.prototype.message = function(value, type) {
      type = type || "info";
      this.$message({
        showClose: true,
        message: value,
        type: type,
        duration: 2000
      });
    };

    //警告消息提示
    Vue.prototype.warningMessage = function(value) {
      this.$message({
        showClose: true,
        message: value,
        type: "warning",
        duration: 2000
      });
    };

    //成功消息提示
    Vue.prototype.successMessage = function(value) {
      this.$message({
        showClose: true,
        message: value,
        type: "success",
        duration: 2000
      });
    };

    //失败消息提示
    Vue.prototype.errorMessage = function(value) {
      this.$message({
        showClose: true,
        message: value,
        type: "error",
        duration: 2500
      });
    };

    //表单重置
    Vue.prototype.$resetForm = function(formName) {
      this.$refs[formName].resetFields();
    };
  }
};
