function ninja_forms_before_submit(e,t,n){var r=jQuery(t).triggerHandler("beforeSubmit",[e,t,n]);if(r!==false){r=jQuery("body").triggerHandler("beforeSubmit",[e,t,n])}if(r!==false){r=jQuery(document).triggerHandler("beforeSubmit",[e,t,n])}return r}function ninja_forms_response(e,t,n,r){if(ninja_forms_settings.ajax_msg_format=="inline"){var i=jQuery(r).triggerHandler("submitResponse",[e]);if(i!==false){i=jQuery("body").triggerHandler("submitResponse",[e])}if(i!==false){i=jQuery(document).triggerHandler("submitResponse",[e])}return i}}function ninja_forms_register_response_function(e,t){if(typeof window["ninja_forms_response_function_list"][e]=="undefined"){window["ninja_forms_response_function_list"][e]={}}window["ninja_forms_response_function_list"][e][t]=t}function ninja_forms_register_before_submit_function(e,t){if(typeof window["ninja_forms_before_submit_function_list"][e]=="undefined"){window["ninja_forms_before_submit_function_list"][e]={}}window["ninja_forms_before_submit_function_list"][e][t]=t}function ninja_forms_default_before_submit(e,t,n){var r=jQuery(t).prop("id").replace("ninja_forms_form_","");jQuery("#ninja_forms_form_"+r+"_process_msg").show();jQuery("#ninja_forms_form_"+r+"_response_msg").prop("innerHTML","");jQuery("#ninja_forms_form_"+r+"_response_msg").removeClass("ninja-forms-error-msg");jQuery("#ninja_forms_form_"+r+"_response_msg").removeClass("ninja-forms-success-msg");jQuery(".ninja-forms-field-error").prop("innerHTML","");jQuery(".ninja-forms-error").removeClass("ninja-forms-error");return true}function ninja_forms_default_response(e){var t=e.form_id;jQuery("#ninja_forms_form_"+t+"_process_msg").hide();ninja_forms_update_error_msgs(e);ninja_forms_update_success_msg(e);return true}function ninja_forms_update_success_msg(e){var t="";var n=e.form_id;var r=e.success;var i=e.form_settings;var s=i.hide_complete;var o=i.clear_complete;if(r!=false){for(var u in r){t+="<p>"+r[u]+"</p>"}if(t!=""){jQuery("#ninja_forms_form_"+n+"_response_msg").removeClass("ninja-forms-error-msg");jQuery("#ninja_forms_form_"+n+"_response_msg").addClass("ninja-forms-success-msg");jQuery("#ninja_forms_form_"+n+"_response_msg").prop("innerHTML",t)}if(s==1){jQuery("#ninja_forms_form_"+n).hide()}if(o==1){jQuery("#ninja_forms_form_"+n).clearForm();if("rating"in jQuery("input[type=radio].ninja-forms-star")){jQuery("input[type=radio].ninja-forms-star").rating("drain")}}}}function ninja_forms_update_error_msgs(e){var t="";var n=e.form_id;var r=e.errors;if(r!=false){for(var i in r){if(r[i]["location"]=="general"){t+="<p>"+r[i]["msg"]+"</p>"}else{var s=r[i]["location"];jQuery("#ninja_forms_field_"+s+"_error").show();jQuery("#ninja_forms_field_"+s+"_error").prop("innerHTML",r[i]["msg"]);jQuery("#ninja_forms_field_"+s+"_div_wrap").addClass("ninja-forms-error")}}if(t!=""){jQuery("#ninja_forms_form_"+n+"_response_msg").removeClass("ninja-forms-success-msg");jQuery("#ninja_forms_form_"+n+"_response_msg").addClass("ninja-forms-error-msg");jQuery("#ninja_forms_form_"+n+"_response_msg").prop("innerHTML",t)}}}function ninja_forms_html_decode(e){if(e){var t=jQuery("<div />").html(e).text();t=jQuery("<div />").html(t).text();return t}else{return""}}function ninja_forms_toggle_login_register(e,t){var n="ninja_forms_form_"+t+"_"+e+"_form";if(e=="login"){var r="ninja_forms_form_"+t+"_register_form"}else{var r="ninja_forms_form_"+t+"_login_form"}var i=document.getElementById(n);var s=document.getElementById(r);if(i.style.display=="block"){i.style.display="none"}else{i.style.display="block";s.style.display="none"}}function ninja_forms_get_form_id(e){var t=jQuery(e).closest("form").prop("id");t=t.replace("ninja_forms_form_","");if(t==""||t=="ninja_forms_admin"){t=jQuery("#_form_id").val()}return t}function check_pass_strength(e,t){jQuery("#pass-strength-result").removeClass("short bad good strong");if(!e){jQuery("#pass-strength-result").html(ninja_forms_password_strength.empty);return}strength=passwordStrength(e,t);switch(strength){case 2:jQuery("#pass-strength-result").addClass("bad").html(ninja_forms_password_strength["bad"]);break;case 3:jQuery("#pass-strength-result").addClass("good").html(ninja_forms_password_strength["good"]);break;case 4:jQuery("#pass-strength-result").addClass("strong").html(ninja_forms_password_strength["strong"]);break;case 5:jQuery("#pass-strength-result").addClass("short").html(ninja_forms_password_strength["mismatch"]);break;default:jQuery("#pass-strength-result").addClass("short").html(ninja_forms_password_strength["short"])}}function passwordStrength(e,t){var n=1,r=2,i=3,s=4,o=5,u=0,a,f;if(e!=t&&t.length>0)return o;if(e.length<4)return n;if(e.match(/[0-9]/))u+=10;if(e.match(/[a-z]/))u+=26;if(e.match(/[A-Z]/))u+=26;if(e.match(/[^a-zA-Z0-9]/))u+=31;a=Math.log(Math.pow(u,e.length));f=a/Math.LN2;if(f<40)return r;if(f<56)return i;return s}function ninja_forms_find_opposite_op(e){switch(e){case"add":return"subtract";case"subtract":return"add";case"multiply":return"divide";case"divide":return"multiply"}}function ninja_forms_var_operator(e){this.operation=e;this.evaluate=function(t,n){switch(this.operation){case"add":return t+n;case"subtract":return t-n;case"multiply":return t*n;case"divide":return t/n}}}jQuery(document).ready(function(jQuery){function ninja_forms_countdown(e,t){$countdown=jQuery("#"+e);counter=parseInt($countdown.data("countdown"))-1;$countdown.val(counter).data("countdown",counter).find("span").html(counter);if(counter<=0){window.clearInterval(countdown.index);$countdown.removeAttr("disabled").html($countdown.data("text"))}}window["ninja_forms_response_function_list"]={};window["ninja_forms_before_submit_function_list"]={};jQuery(".ninja-forms-form input").bind("keypress",function(e){if(e.keyCode==13){var t=jQuery(this).attr("type");if(t!="textarea"){return false}}});jQuery("div.label-inside input, div.label-inside textarea").focus(function(){var e=jQuery("#"+this.id+"_label_hidden").val();if(this.value==e){this.value=""}});jQuery("div.label-inside input, div.label-inside textarea").blur(function(){var e=jQuery("#"+this.id+"_label_hidden").val();if(this.value==""){this.value=e}});if(jQuery.fn.mask){jQuery(".ninja-forms-mask").each(function(){var e=jQuery(this).data("mask");e=e.toString();jQuery(this).mask(e)});var date_format_mask=ninja_forms_settings.date_format;date_format_mask=date_format_mask.replace(/m/g,9);date_format_mask=date_format_mask.replace(/d/g,9);date_format_mask=date_format_mask.replace(/y/g,99);date_format_mask=date_format_mask.replace(/Y/g,9999);jQuery(".ninja-forms-date").mask(date_format_mask)}if(jQuery.fn.datepicker){jQuery(".ninja-forms-datepicker").datepicker({dateFormat:ninja_forms_settings.date_format})}if(jQuery.fn.autoNumeric){jQuery(".ninja-forms-currency").autoNumeric({aSign:ninja_forms_settings.currency_symbol,aSep:thousandsSeparator,aDec:decimalPoint})}if(jQuery.fn.qtip){jQuery(".ninja-forms-help-text").qtip({style:{classes:"qtip-shadow qtip-dark"}})}jQuery(".input-limit").each(function(){var e=jQuery(this).data("input-limit");var t=jQuery(this).data("input-limit-type");var n=jQuery(this).data("input-limit-msg");jQuery(this).counter({count:"down",goal:e,type:t,msg:n})});jQuery(".ninja-forms-form").each(function(){var e=this.id.replace("ninja_forms_form_","");var t=window["ninja_forms_form_"+e+"_settings"];ajax=t.ajax;if(ajax==1){var n={beforeSubmit:ninja_forms_before_submit,success:ninja_forms_response,dataType:"json"};jQuery(this).ajaxForm(n);jQuery(this).on("submitResponse.default",function(e,t){return ninja_forms_default_response(t)});jQuery(this).on("beforeSubmit.default",function(e,t,n,r){return ninja_forms_default_before_submit(t,n,r)})}else{jQuery(this).submit(function(e){var t=jQuery(this).serialize();var n=this;var r="";return ninja_forms_before_submit(t,n,r)})}});jQuery(".pass1").val("").keyup(function(){var e=this.value;var t=this.id.replace("pass1","pass2");t=jQuery("#"+t).val();check_pass_strength(e,t)});jQuery(".pass2").val("").keyup(function(){var e=this.value;var t=this.id.replace("pass2","pass1");t=jQuery("#"+t).val();check_pass_strength(t,e)});var countdown={};jQuery(".countdown-timer").each(function(e){jQuery(this).attr("disabled","disabled").prev("input.no-js").remove();id=jQuery(this).attr("id");countdown.index=window.setInterval(function(){ninja_forms_countdown(id,e)},1e3)});var calc_fields=jQuery(".ninja-forms-field-calc-listen");calc_fields.each(function(e,t){if(this.type=="checkbox"){if(this.checked){var n="checked"}else{var n="unchecked"}}else{if(typeof this.type==="undefined"){var n=jQuery(this).prop("innerHTML")}else{var n=jQuery(this).val()}}var r=ninja_forms_get_form_id(this);var i=jQuery(this).attr("rel");var s=window["ninja_forms_form_"+r+"_calc_settings"];for(calc_id in s.calc_fields){if(calc_id!=i){jQuery(t).data(calc_id+"-oldValue",n)}}});jQuery("body").on("focus",".ninja-forms-field-list-options-span-calc-listen",function(e){var t=jQuery(this).attr("rel");if(jQuery("#ninja_forms_field_"+t+"_type").val()=="list"&&jQuery("#ninja_forms_field_"+t+"_list_type").val()=="radio"){var n=ninja_forms_get_form_id(this);var r=window["ninja_forms_form_"+n+"_calc_settings"];for(calc_id in r.calc_fields){if(calc_id!=t){jQuery(this).data(calc_id+"-oldValue",jQuery("input[name='ninja_forms_field_"+t+"']:checked").val())}}}});jQuery("body").on("mousedown",".ninja-forms-field-list-options-span-calc-listen",function(e){var t=jQuery(this).attr("rel");if(jQuery("#ninja_forms_field_"+t+"_type").val()=="list"&&jQuery("#ninja_forms_field_"+t+"_list_type").val()=="radio"){var n=ninja_forms_get_form_id(this);var r=window["ninja_forms_form_"+n+"_calc_settings"];for(calc_id in r.calc_fields){if(calc_id!=t){jQuery(this).data(calc_id+"-oldValue",jQuery("input[name='ninja_forms_field_"+t+"']:checked").val())}}}});jQuery("body").on("change",".ninja-forms-field-calc-listen",function(event){if(this==event.target){var form_id=ninja_forms_get_form_id(this);var field_id=jQuery(this).attr("rel");var calc_settings=window["ninja_forms_form_"+form_id+"_calc_settings"];var visible=jQuery("#ninja_forms_field_"+field_id+"_div_wrap").data("visible");for(calc_id in calc_settings.calc_fields){if(calc_id!=field_id){var calc_method=calc_settings.calc_fields[calc_id]["method"];var calc_places=calc_settings.calc_fields[calc_id]["places"];if(calc_method=="fields"){var change=false;for(var i=calc_settings.calc_fields[calc_id]["fields"].length-1;i>=0;i--){if(calc_settings.calc_fields[calc_id]["fields"][i]["field"]==field_id){change=true;break}}}else if(calc_method=="eq"){var change=false;if(typeof calc_settings.calc_fields[calc_id]["fields"]!=="undefined"){for(var i=calc_settings.calc_fields[calc_id]["fields"].length-1;i>=0;i--){if(calc_settings.calc_fields[calc_id]["fields"][i]==field_id){change=true;break}}}}if((calc_method=="fields"||calc_method=="eq")&&change||calc_method=="auto"){if(calc_method=="auto"||calc_method=="fields"){var key=jQuery(this).val();var new_value="";old_value=jQuery(this).data(calc_id+"-oldValue");if(jQuery("#ninja_forms_field_"+field_id+"_type").val()=="list"){var key=jQuery(this).val();if(jQuery("#ninja_forms_field_"+field_id+"_list_type").val()=="checkbox"){if(this.checked){jQuery(this).data(calc_id+"-oldValue","checked")}else{jQuery(this).data(calc_id+"-oldValue","unchecked")}if(this.checked&&visible==1){old_value=0}else if(this.checked&&visible!=1){old_value=key;new_value=0}else if(!this.checked&&visible==1){if(old_value=="checked"){old_value=key}else{old_value=0}new_value=0}else if(!this.checked&&visible!=1){if(old_value=="checked"){old_value=key}else{old_value=0}new_value=0}}else if(jQuery("#ninja_forms_field_"+field_id+"_list_type").val()=="radio"){var span=jQuery(this).parent().parent().parent().parent();old_value=jQuery(span).data(calc_id+"-oldValue");if(typeof old_value==="undefined"){if(this.checked){old_value=jQuery(this).val()}}if(this.checked&&visible==1){if(old_value==key){old_value=0}}else if(this.checked&&visible!=1){new_value=0}else if(!this.checked){old_value=0;new_value=0}if(this.checked){jQuery(span).data(calc_id+"-oldValue",key)}}else if(jQuery("#ninja_forms_field_"+field_id+"_list_type").val()=="multi"){if(jQuery.isArray(key)){var tmp=0;for(var i=key.length-1;i>=0;i--){if(typeof calc_settings.calc_value[field_id][key[i]]!=="undefined"){tmp+=parseFloat(calc_settings.calc_value[field_id][key[i]])}}new_value=tmp}if(jQuery.isArray(old_value)){var tmp=0;for(var i=old_value.length-1;i>=0;i--){if(typeof calc_settings.calc_value[field_id][old_value[i]]!=="undefined"){tmp+=parseFloat(calc_settings.calc_value[field_id][old_value[i]])}}old_value=tmp}}else{var old_value=jQuery(this).data(calc_id+"-oldValue")}}else if(jQuery("#ninja_forms_field_"+field_id+"_type").val()=="checkbox"){if(this.checked&&visible==1){var key="checked";old_value="unchecked"}else if(this.checked&&visible!=1){var key="unchecked";if(jQuery(this).data(calc_id+"-oldValue")=="checked"||typeof jQuery(this).data(calc_id+"-oldValue")==="undefined"){old_value="checked"}else{old_value=0}}else if(!this.checked&&visible!=1){var key="unchecked";old_value=0}else{var key="unchecked";if(jQuery(this).data(calc_id+"-oldValue")=="checked"||typeof jQuery(this).data(calc_id+"-oldValue")==="undefined"){old_value="checked"}else{old_value=0}}}else if(jQuery("#ninja_forms_field_"+field_id+"_type").val()=="calc"){if(key==""){key=jQuery("#ninja_forms_field_"+field_id).prop("innerHTML")}}if(new_value===""){if(typeof calc_settings.calc_value[field_id]!=="undefined"&&typeof calc_settings.calc_value[field_id][key]!=="undefined"){var new_value=calc_settings.calc_value[field_id][key]}else{if(typeof this.type==="undefined"){var new_value=this.innerHTML}else{var new_value=this.value}if(typeof ninja_forms_settings.currency_symbol!=="undefined"){new_value=new_value.replace(ninja_forms_settings.currency_symbol,"");new_value=new_value.replace(/,/g,"")}if(isNaN(new_value)){new_value=0}}}if(typeof calc_settings.calc_value[field_id]!=="undefined"&&typeof calc_settings.calc_value[field_id][old_value]!=="undefined"){old_value=calc_settings.calc_value[field_id][old_value]}else{if(old_value==""||typeof old_value==="undefined"){old_value=0}else{if(isNaN(old_value)){if(typeof ninja_forms_settings.currency_symbol!=="undefined"){old_value=old_value.replace(ninja_forms_settings.currency_symbol,"");old_value=old_value.replace(/,/g,"")}}}}if(jQuery("#ninja_forms_field_"+calc_id).attr("type")=="text"){var current_value=jQuery("#ninja_forms_field_"+calc_id).val()}else{var current_value=jQuery("#ninja_forms_field_"+calc_id).html()}if(typeof ninja_forms_settings.currency_symbol!=="undefined"){current_value=current_value.replace(ninja_forms_settings.currency_symbol,"");current_value=current_value.replace(/,/g,"")}if(!isNaN(current_value)){current_value=parseFloat(current_value)}else{current_value=0}if(calc_method=="auto"){var old_op="subtract";var new_op="add";if(!jQuery(this).hasClass("ninja-forms-field-calc-auto")){old_value="";new_value=""}}else if(calc_method=="fields"){for(var i=calc_settings.calc_fields[calc_id]["fields"].length-1;i>=0;i--){if(calc_settings.calc_fields[calc_id]["fields"][i]["field"]==field_id){var old_op=ninja_forms_find_opposite_op(calc_settings.calc_fields[calc_id]["fields"][i]["op"]);var new_op=calc_settings.calc_fields[calc_id]["fields"][i]["op"]}}}if(old_value&&!isNaN(old_value)&&old_value!=0&&old_value!=""&&!jQuery(this).hasClass("ninja-forms-field-calc-no-old-op")){old_value=parseFloat(old_value);var asdf=current_value;tmp=new ninja_forms_var_operator(old_op);current_value=tmp.evaluate(current_value,old_value)}if(new_value&&!isNaN(new_value)&&new_value!=0&&new_value!=""&&!jQuery(this).hasClass("ninja-forms-field-calc-no-new-op")){new_value=parseFloat(new_value);tmp=new ninja_forms_var_operator(new_op);var calc_value=tmp.evaluate(current_value,new_value)}else{var calc_value=current_value}}else if(calc_method=="eq"){var tmp_eq=calc_settings.calc_fields[calc_id]["eq"];for(var i=calc_settings.calc_fields[calc_id]["fields"].length-1;i>=0;i--){var f_id=calc_settings.calc_fields[calc_id]["fields"][i];var key=jQuery("#ninja_forms_field_"+f_id).val();var f_value="";if(jQuery("#ninja_forms_field_"+f_id+"_type").val()=="list"){if(jQuery("#ninja_forms_field_"+f_id+"_list_type").val()=="radio"){key=jQuery(".ninja-forms-field-"+f_id+"-options :checked").val()}else if(jQuery("#ninja_forms_field_"+f_id+"_list_type").val()=="multi"){if(jQuery.isArray(key)){var tmp=0;for(var x=key.length-1;x>=0;x--){if(typeof calc_settings.calc_value[f_id][key[x]]!=="undefined"){tmp+=parseFloat(calc_settings.calc_value[f_id][key[x]])}}f_value=tmp}}else if(jQuery("#ninja_forms_field_"+f_id+"_list_type").val()=="checkbox"){var tmp=0;jQuery(".ninja-forms-field-"+f_id+"-options :checked").each(function(){if(typeof calc_settings.calc_value[f_id][this.value]!=="undefined"){tmp+=parseFloat(calc_settings.calc_value[f_id][this.value])}});f_value=tmp}}else if(jQuery("#ninja_forms_field_"+f_id+"_type").val()=="checkbox"){if(jQuery("#ninja_forms_field_"+f_id).attr("checked")){var key="checked"}else{var key="unchecked"}}else if(jQuery("#ninja_forms_field_"+f_id+"_type").val()=="calc"){if(key==""){f_value=jQuery("#ninja_forms_field_"+f_id).prop("innerHTML")}}if(f_value==""){if(typeof calc_settings.calc_value[f_id]!=="undefined"&&typeof calc_settings.calc_value[f_id][key]!=="undefined"){f_value=calc_settings.calc_value[f_id][key]}else{f_value=key}}if(typeof f_value!=="undefined"&&typeof f_value==="string"){if(f_value.indexOf("%")>=0){f_value=f_value.replace("%","");if(!isNaN(f_value)){f_value=parseFloat(f_value)/100}}}if(typeof this.type==="undefined"&&key==""){f_value=this.innerHTML}if(typeof ninja_forms_settings.currency_symbol!=="undefined"&&isNaN(f_value)){f_value=f_value.replace(ninja_forms_settings.currency_symbol,"");f_value=f_value.replace(/,/g,"")}if(isNaN(f_value)||f_value==""||!f_value||typeof f_value==="undefined"){f_value=0}var find="field_"+f_id;var re=new RegExp(find,"g");tmp_eq=tmp_eq.replace(re,f_value)}var calc_value=eval(tmp_eq)}if(jQuery("#ninja_forms_field_"+calc_id).attr("type")=="text"){var current_value=jQuery("#ninja_forms_field_"+calc_id).val()}else{var current_value=jQuery("#ninja_forms_field_"+calc_id).html()}if(typeof ninja_forms_settings.currency_symbol!=="undefined"){current_value=current_value.replace(ninja_forms_settings.currency_symbol,"")}if(!isNaN(current_value)){current_value=parseFloat(current_value)}else{current_value=0}if(current_value!==calc_value){if(jQuery("#ninja_forms_field_"+field_id+"_list_type").val()!="checkbox"){jQuery(this).data(calc_id+"-oldValue",key)}if(jQuery("#ninja_forms_field_"+field_id+"_list_type").val()=="checkbox"||jQuery("#ninja_forms_field_"+field_id+"_list_type").val()=="radio"){jQuery("#ninja_forms_field_"+field_id+"_div_wrap").find(".ninja-forms-field").each(function(){jQuery(this).removeClass("ninja-forms-field-calc-no-old-op")})}else{jQuery(this).removeClass("ninja-forms-field-calc-no-old-op")}calc_value=calc_value.toFixed(calc_places);if(jQuery("#ninja_forms_field_"+calc_id).attr("type")=="text"){jQuery("#ninja_forms_field_"+calc_id).val(calc_value)}else{jQuery("#ninja_forms_field_"+calc_id).html(calc_value)}jQuery("#ninja_forms_field_"+calc_id).trigger("change")}}}}}})})