/*!build time : 2013-11-14 4:24:40 PM*/
KISSY.add("gallery/uploader/1.5/themes/ershouUploader/index",function(a,b,c){function d(a){var b=this;d.superclass.constructor.call(b,a)}return b.all,a.extend(d,c,{render:function(){var a=this;a.get("uploader")}},{ATTRS:{name:{value:"ershouUploader"},cssUrl:{value:"gallery/uploader/1.5/themes/ershouUploader/style.css"},fileTpl:{value:'<li id="J_LineQueue-{id}" data-file-id="{id}" data-url="{sUrl}" data-name="{name}" data-size="{textSize}"><div class="J_Wrapper wrapper"><div class="tb-pic120"><a href="javascript:void(0);"><img class="J_ItemPic" src="{sUrl}" /></a></div><div class="pic-mask"></div><div class="status-wrapper"><div class="status waiting-status tips-upload-waiting"><p>\u7b49\u5f85\u4e0a\u4f20\uff0c\u8bf7\u7a0d\u5019</p></div><div class="status start-status progress-status success-status tips-upload-success"><div class="J_ProgressBar_{id}"><s class="loading-icon"></s>\u4e0a\u4f20\u4e2d...</div></div><div class="status error-status"><p class="J_ErrorMsg_{id} tips-upload-error">\u4e0a\u4f20\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5\uff01</p></div></div><div class="upload-op-mask"></div><div class="upload-operations"><a class="J_SetMainPic set-as-main" data-file-id="{id}" href="#">\u8bbe\u4e3a\u4e3b\u56fe</a><a class="J_DeleltePic del-pic" data-file-id="{id}" href="#">\u5220\u9664</a></div></div></li>'},use:{value:"proBars,filedrop,preview,coverPic"},defaultMsg:{value:"\u6700\u591a\u4e0a\u4f20{max}\u5f20\u7167\u7247\uff0c\u6bcf\u5f20\u56fe\u7247\u5c0f\u4e8e5M"},leftMsg:{value:"\u8fd8\u53ef\u4ee5\u4e0a\u4f20{left}\u5f20\u56fe\u7247\uff0c\u6bcf\u5f20\u5c0f\u4e8e5M\u3002\u4e3b\u56fe\u5c06\u5728\u641c\u7d22\u7ed3\u679c\u4e2d\u5c55\u793a\uff0c\u8bf7\u8ba4\u771f\u8bbe\u7f6e\u3002"}}}),d},{requires:["node","gallery/gallery/uploader/1.5/themes/imageUploader/index"]});