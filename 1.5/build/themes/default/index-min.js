/*!build time : 2013-11-14 4:24:40 PM*/
KISSY.add("gallery/uploader/1.5/themes/default/index",function(a,b,c){function d(a){var b=this;d.superclass.constructor.call(b,a)}var e=b.all;return a.extend(d,c,{_addHandler:function(a){var b=this,c=a.file,d=c.id,f=b.get("uploader"),g=f.get("queue"),h=e(".J_Del_"+d),i=e(".J_Cancel_"+d),j=e(".J_Upload_"+d);i.on("click",function(a){a.preventDefault();var b=g.getFileIndex(c.id);f.cancel(b)}),h.on("click",function(a){a.preventDefault();var b=g.getFileIndex(c.id);g.remove(b)}),j.on("click",function(a){a.preventDefault();var b=g.getFileIndex(c.id);f.upload(b)})},_progressHandler:function(){},_successHandler:function(a){var b=a.file,c=b.id,d=e(".J_Del_"+c),f=e(".J_Cancel_"+c);d.show(),f.hide()},_errorHandler:function(a){var b=a.file;if(!b)return!1;var c=a.file.id,d=a.msg||a.result.msg;e(".J_ErrorMsg_"+c).html(d)}},{ATTRS:{name:{value:"defaultTheme"},fileTpl:{value:'<li id="queue-file-{id}" class="grid" data-name="{name}"><div class="g-u sprite file-icon"></div><div class="g-u">{name}</div><div class="g-u status-wrapper grid"><div class="status waiting-status">\u7b49\u5f85\u4e0a\u4f20\uff0c<a class="J_Upload_{id}" href="#Upload">\u70b9\u6b64\u4e0a\u4f20</a> </div><div class="status start-status progress-status success-status clearfix"><div class="J_ProgressBar_{id} g-u uploader-progress"><img class="loading" src="http://img01.taobaocdn.com/tps/i1/T1F5tVXjRfXXXXXXXX-16-16.gif" alt="loading" /></div> <a  class="J_Cancel_{id} g-u upload-cancel" href="#uploadCancel">\u53d6\u6d88</a><a href="#fileDel" class=" g-u J_Del_{id}" style="display:none;">\u5220\u9664</a></div> <div class="status cancel-status">\u5df2\u7ecf\u53d6\u6d88\u4e0a\u4f20\uff0c<a href="#reUpload" id="J_ReUpload_{id}" class="J_Upload_{id}">\u70b9\u6b64\u91cd\u65b0\u4e0a\u4f20</a> </div><div class="status error-status upload-error"><span class="J_ErrorMsg_{id}"></span><a href="#fileDel" class="J_Del_{id}">\u5220\u9664</a></div></div></li>'},use:{value:"proBars"},authMsg:{value:{max:"\u6bcf\u6b21\u6700\u591a\u4e0a\u4f20{max}\u4e2a\u6587\u4ef6\uff01",maxSize:"\u6587\u4ef6\u5927\u5c0f\u4e3a{size}\uff0c\u8d85\u8fc7{maxSize}\uff01",required:"\u81f3\u5c11\u4e0a\u4f20\u4e00\u4e2a\u6587\u4ef6\uff01",allowExts:"\u4e0d\u652f\u6301{ext}\u683c\u5f0f\uff01",allowRepeat:"\u8be5\u6587\u4ef6\u5df2\u7ecf\u5b58\u5728\uff01"}}}}),d},{requires:["node","gallery/gallery/uploader/1.5/theme"]});