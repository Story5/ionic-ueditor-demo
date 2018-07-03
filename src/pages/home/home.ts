import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
declare var UE;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  html;

  constructor(public navCtrl: NavController) {
    this.initEditor();
  }

  initEditor() {
    var ue = UE.getEditor('container');
    ue.ready(function () {
      //设置编辑器的内容
      ue.setContent(`<p style="text-align:right;line-height:17px">
    <span style="font-family: 宋体">湘质监统编</span>
</p>
<p style="text-align:right;line-height:17px">
    <span style="font-family: 宋体">备2015-1</span>
</p>
<p style="text-align:right;line-height:17px">
    <span style="font-family: 宋体">&nbsp;</span>
</p>
<p style="margin-right:7px;text-align:right;line-height:17px">
    <span style="font-family: 宋体">共5页 第1页</span>
</p>
<p style="text-align:right;line-height:17px">
    <span style="font-family: 宋体">&nbsp;</span>
</p>
<table cellspacing="0" cellpadding="0" width="260">
    <tbody>
        <tr style=";height:35px" class="firstRow">
            <td width="120" style="border-color: windowtext; border-width: 1px; padding: 0px 7px;" height="35">
                <p style="text-align:center">
                    <span style="font-size: 15px;font-family: 宋体">监督登记号：</span>
                </p>
            </td>
            <td width="140" style="border-top-color: windowtext; border-top-width: 1px; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: black; border-right-width: 1px; padding: 0px 7px;" height="35"></td>
        </tr>
        <tr style=";height:35px">
            <td width="120" style="border-right-color: windowtext; border-bottom-color: windowtext; border-left-color: windowtext; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-top-style: none; padding: 0px 7px;" height="35">
                <p style="text-align:center">
                    <span style="font-size: 15px;font-family: 宋体">备&nbsp; 案&nbsp; 号：</span>
                </p>
            </td>
            <td width="140" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: black; border-right-width: 1px; padding: 0px 7px;" height="35"></td>
        </tr>
    </tbody>
</table>
<p style="text-align:right;line-height:17px">
    <span style="font-family: 宋体">&nbsp;</span>
</p>
<p style="text-align:right;line-height:17px">
    <span style="font-family: 宋体">&nbsp;</span>
</p>
<p style="text-align:right;line-height:17px">
    <span style="font-family: 宋体">&nbsp;</span>
</p>
<p style="text-align:right;line-height:17px">
    <span style="font-family: 宋体">&nbsp;</span>
</p>
<p style="text-align:right;line-height:17px">
    <span style="font-family: 宋体">&nbsp;</span>
</p>
<p style="text-align:right;line-height:17px">
    <span style="font-family: 宋体">&nbsp;</span>
</p>
<p style="text-align:center;line-height:17px">
    <span style="font-family: 宋体">&nbsp;</span>
</p>
<p style="text-align:center;line-height:17px">
    <span style="font-family: 宋体">&nbsp;</span>
</p>
<p style="text-align:center;line-height:17px">
    <span style="font-family: 宋体">&nbsp;</span>
</p>
<p style="text-align:center;line-height:17px">
    <span style="font-family: 宋体">&nbsp;</span>
</p>
<p style="text-align:center">
    <span style="font-size: 45px;font-family: 黑体">工程竣工验收备案表</span>
</p>
<p style="text-align:center">
    <span style="font-size: 45px;font-family: 黑体">&nbsp;</span>
</p>
<p style="text-align:center">
    <span style="font-size: 45px;font-family: 黑体">&nbsp;</span>
</p>
<p style="text-align:center">
    <span style="font-size: 45px;font-family: 黑体">&nbsp;</span>
</p>
<p style="margin-left:132px">
    <span style="font-size: 25px;font-family: 宋体">工程名称：<span style="text-decoration:underline;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span>
</p>
<p style="margin-left:132px">
    <span style="font-size: 25px;font-family: 宋体">&nbsp;</span>
</p>
<p style="margin-left:132px">
    <span style="font-size: 25px;font-family: 宋体">建设单位：<span style="text-decoration:underline;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span>
</p>
<p style="text-align:center">
    <span style="font-size: 25px;font-family: 宋体">&nbsp;</span>
</p>
<p style="text-align:center">
    <span style="font-size: 25px;font-family: 宋体">&nbsp;</span>
</p>
<p style="text-align:center">
    <span style="font-size: 25px;font-family: 宋体">&nbsp;</span>
</p>
<p style="text-align:center">
    <span style="font-size: 25px;font-family: 宋体">&nbsp;</span>
</p>
<p style="text-align:center">
    <span style="font-size: 25px;font-family: 宋体">湖南省住房和城乡建设厅制</span>
</p>
<p style="text-align:center">
    <span style="font-size: 25px;font-family: 宋体">年&nbsp; 月&nbsp; 日</span>
</p>
<p>
    <span style="font-size: 25px;font-family: 宋体"><br clear="all" style="page-break-before:always"/> </span> 
</p>
<p>
    <span style="font-size: 25px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 25px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 25px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 25px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 25px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 25px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 25px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 25px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 25px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 25px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 25px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 25px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 25px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 25px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 25px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 25px;font-family: 宋体"><br/></span>
</p>
<p style="margin-bottom:10px;text-align:center">
    <span style="text-decoration:underline;"><span style="font-size: 25px;font-family: 宋体">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span style="font-size: 25px;font-family: 宋体">工程</span>
</p>
<p style="text-align:center">
    <strong><span style="font-size: 25px;font-family: 黑体">竣 工 验 收 备 案 表</span></strong>
</p>
<p style="margin-right:7px;text-align:right">
    <span style="font-size: 13px;font-family: 宋体">共5页 第2页</span>
</p>
<table cellspacing="0" cellpadding="0">
    <tbody>
        <tr style=";height:47px" class="firstRow">
            <td width="111" style="border-color: windowtext; border-width: 1px; padding: 0px 7px;" height="47">
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">建设单位名称</span>
                </p>
            </td>
            <td width="565" colspan="3" style="border-top-color: windowtext; border-top-width: 1px; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: black; border-right-width: 1px; padding: 0px 7px;" height="47"></td>
        </tr>
        <tr style=";height:47px">
            <td width="111" style="border-right-color: windowtext; border-bottom-color: windowtext; border-left-color: windowtext; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-top-style: none; padding: 0px 7px;" height="47">
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">备案日期</span>
                </p>
            </td>
            <td width="565" colspan="3" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: black; border-right-width: 1px; padding: 0px 7px;" height="47">
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">年&nbsp; &nbsp; 月&nbsp; 日</span>
                </p>
            </td>
        </tr>
        <tr style=";height:47px">
            <td width="111" style="border-right-color: windowtext; border-bottom-color: windowtext; border-left-color: windowtext; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-top-style: none; padding: 0px 7px;" height="47">
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">工程名称</span>
                </p>
            </td>
            <td width="565" colspan="3" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: black; border-right-width: 1px; padding: 0px 7px;" height="47"></td>
        </tr>
        <tr style=";height:47px">
            <td width="111" style="border-right-color: windowtext; border-bottom-color: windowtext; border-left-color: windowtext; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-top-style: none; padding: 0px 7px;" height="47">
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">工程地点</span>
                </p>
            </td>
            <td width="565" colspan="3" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: black; border-right-width: 1px; padding: 0px 7px;" height="47"></td>
        </tr>
        <tr style=";height:47px">
            <td width="111" style="border-right-color: windowtext; border-bottom-color: windowtext; border-left-color: windowtext; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-top-style: none; padding: 0px 7px;" height="47">
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">建筑面积（m2）</span>
                </p>
            </td>
            <td width="565" colspan="3" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: black; border-right-width: 1px; padding: 0px 7px;" height="47"></td>
        </tr>
        <tr style=";height:47px">
            <td width="111" style="border-right-color: windowtext; border-bottom-color: windowtext; border-left-color: windowtext; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-top-style: none; padding: 0px 7px;" height="47">
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">结构类型</span>
                </p>
            </td>
            <td width="565" colspan="3" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: black; border-right-width: 1px; padding: 0px 7px;" height="47"></td>
        </tr>
        <tr style=";height:47px">
            <td width="111" style="border-right-color: windowtext; border-bottom-color: windowtext; border-left-color: windowtext; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-top-style: none; padding: 0px 7px;" height="47">
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">工程用途</span>
                </p>
            </td>
            <td width="565" colspan="3" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: black; border-right-width: 1px; padding: 0px 7px;" height="47"></td>
        </tr>
        <tr style=";height:47px">
            <td width="111" style="border-right-color: windowtext; border-bottom-color: windowtext; border-left-color: windowtext; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-top-style: none; padding: 0px 7px;" height="47">
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">开工日期</span>
                </p>
            </td>
            <td width="565" colspan="3" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: black; border-right-width: 1px; padding: 0px 7px;" height="47">
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">年&nbsp; &nbsp; 月&nbsp; 日</span>
                </p>
            </td>
        </tr>
        <tr style=";height:47px">
            <td width="111" style="border-right-color: windowtext; border-bottom-color: windowtext; border-left-color: windowtext; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-top-style: none; padding: 0px 7px;" height="47">
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">竣工验收日期</span>
                </p>
            </td>
            <td width="565" colspan="3" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: black; border-right-width: 1px; padding: 0px 7px;" height="47">
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">年&nbsp; &nbsp; 月&nbsp; 日</span>
                </p>
            </td>
        </tr>
        <tr style=";height:47px">
            <td width="111" style="border-right-color: windowtext; border-bottom-color: windowtext; border-left-color: windowtext; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-top-style: none; padding: 0px 7px;" height="47">
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">施工许可证号</span>
                </p>
            </td>
            <td width="565" colspan="3" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: black; border-right-width: 1px; padding: 0px 7px;" height="47"></td>
        </tr>
        <tr style=";height:47px">
            <td width="111" style="border-right-color: windowtext; border-bottom-color: windowtext; border-left-color: windowtext; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-top-style: none; padding: 0px 7px;" height="47">
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">施工图审查意见</span>
                </p>
            </td>
            <td width="565" colspan="3" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: black; border-right-width: 1px; padding: 0px 7px;" height="47"></td>
        </tr>
        <tr style=";height:47px">
            <td width="111" style="border-right-color: windowtext; border-bottom-color: windowtext; border-left-color: windowtext; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-top-style: none; padding: 0px 7px;" height="47">
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">勘察单位名称</span>
                </p>
            </td>
            <td width="297" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px;" height="47"></td>
            <td width="111" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px;" height="47">
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">资质等级</span>
                </p>
            </td>
            <td width="156" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: black; border-right-width: 1px; padding: 0px 7px;" height="47"></td>
        </tr>
        <tr style=";height:47px">
            <td width="111" style="border-right-color: windowtext; border-bottom-color: windowtext; border-left-color: windowtext; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-top-style: none; padding: 0px 7px;" height="47">
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">设计单位名称</span>
                </p>
            </td>
            <td width="297" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px;" height="47"></td>
            <td width="111" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px;" height="47">
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">资质等级</span>
                </p>
            </td>
            <td width="156" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: black; border-right-width: 1px; padding: 0px 7px;" height="47"></td>
        </tr>
        <tr style=";height:47px">
            <td width="111" style="border-right-color: windowtext; border-bottom-color: windowtext; border-left-color: windowtext; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-top-style: none; padding: 0px 7px;" height="47">
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">施工单位名称</span>
                </p>
            </td>
            <td width="297" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px;" height="47"></td>
            <td width="111" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px;" height="47">
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">资质等级</span>
                </p>
            </td>
            <td width="156" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: black; border-right-width: 1px; padding: 0px 7px;" height="47"></td>
        </tr>
        <tr style=";height:47px">
            <td width="111" style="border-right-color: windowtext; border-bottom-color: windowtext; border-left-color: windowtext; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-top-style: none; padding: 0px 7px;" height="47">
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">监理单位名称</span>
                </p>
            </td>
            <td width="297" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px;" height="47"></td>
            <td width="111" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px;" height="47">
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">资质等级</span>
                </p>
            </td>
            <td width="156" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: black; border-right-width: 1px; padding: 0px 7px;" height="47"></td>
        </tr>
        <tr style=";height:47px">
            <td width="111" style="border-right-color: windowtext; border-bottom-color: windowtext; border-left-color: windowtext; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-top-style: none; padding: 0px 7px;" height="47">
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">工程质量监督<br/> &nbsp; 机构名称</span>
                </p>
            </td>
            <td width="588" colspan="3" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: black; border-right-width: 1px; padding: 0px 7px;" height="47"></td>
        </tr>
    </tbody>
</table>
<p>
    <span style="font-size: 13px;font-family: 宋体">本表一式五份，建设单位、施工单位、备案机关、城建档案馆部门、产权产籍管理部门各一份。</span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br clear="all" style="page-break-before:always"/> </span> 
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <br/>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p style="margin-right:7px;text-align:right">
    <span style="font-size: 13px;font-family: 宋体">共5页 第3页</span>
</p>
<table cellspacing="0" cellpadding="0" width="650" style="width: 728px;">
    <tbody>
        <tr style=";height:175px" class="firstRow">
            <td width="56" rowspan="5" style="border-color: windowtext black black windowtext; border-width: 1px; padding: 0px 7px;" height="175">
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">竣<br/> &nbsp; <br/> &nbsp; 工<br/> &nbsp; <br/> &nbsp; 验<br/> &nbsp; <br/> &nbsp; 收<br/> &nbsp; <br/> &nbsp; 意<br/> &nbsp; <br/> &nbsp; 见</span>
                </p>
            </td>
            <td width="74" style="border-top-color: windowtext; border-right-color: windowtext; border-bottom-color: windowtext; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-style: none; padding: 0px 7px;" height="175">
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">勘察<br/> &nbsp; <br/> &nbsp; 单位<br/> &nbsp; <br/> &nbsp; 意见</span>
                </p>
            </td>
            <td width="520" style="border-top-color: windowtext; border-top-width: 1px; border-left-style: none; border-bottom-style: none; border-right-color: black; border-right-width: 1px; padding: 0px 7px;" height="175">
                <p>
                    <span style="font-size: 13px;font-family: 宋体">项目负责人：</span>
                </p>
                <p>
                    <span style="font-size: 13px;font-family: 宋体">　</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">　</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">　</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="font-size: 13px;font-family: 宋体">（签名、公章）</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">　</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; </span><span style="font-size: 13px;font-family: 宋体">年&nbsp; 月&nbsp; 日</span>
                </p>
            </td>
        </tr>
        <tr style=";height:175px">
            <td width="74" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px;" height="175">
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">设计<br/> &nbsp; <br/> &nbsp; 单位<br/> &nbsp; <br/> &nbsp; 意见</span>
                </p>
            </td>
            <td width="520" valign="top" style="border-top-color: windowtext; border-top-width: 1px; border-left-style: none; border-bottom-style: none; border-right-color: black; border-right-width: 1px; padding: 0px 7px;" height="175">
                <p>
                    <span style="font-size: 13px;font-family: 宋体">项目负责人：</span>
                </p>
                <p>
                    <span style="font-size: 13px;font-family: 宋体">　</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">　</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">　</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; </span><span style="font-size: 13px;font-family: 宋体">（签名、公章）</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">　</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; </span><span style="font-size: 13px;font-family: 宋体">年&nbsp; 月&nbsp; 日</span>
                </p>
            </td>
        </tr>
        <tr style=";height:175px">
            <td width="74" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px;" height="175">
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">施工<br/> &nbsp; <br/> &nbsp; 单位<br/> &nbsp; <br/> &nbsp; 意见</span>
                </p>
            </td>
            <td width="520" style="border-top-color: windowtext; border-top-width: 1px; border-left-style: none; border-bottom-style: none; border-right-color: black; border-right-width: 1px; padding: 0px 7px;" height="175">
                <p>
                    <span style="font-size: 13px;font-family: 宋体">项目负责人：</span>
                </p>
                <p>
                    <span style="font-size: 13px;font-family: 宋体">　</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">　</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">　</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; </span><span style="font-size: 13px;font-family: 宋体">（签名、公章）</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">　</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; </span><span style="font-size: 13px;font-family: 宋体">年&nbsp; 月&nbsp; 日</span>
                </p>
            </td>
        </tr>
        <tr style=";height:175px">
            <td width="74" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px;" height="175">
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">监理<br/> &nbsp; <br/> &nbsp; 单位<br/> &nbsp; <br/> &nbsp; 意见</span>
                </p>
            </td>
            <td width="520" style="border-top-color: windowtext; border-top-width: 1px; border-left-style: none; border-bottom-style: none; border-right-color: black; border-right-width: 1px; padding: 0px 7px;" height="175">
                <p>
                    <span style="font-size: 13px;font-family: 宋体">项目负责人：</span>
                </p>
                <p>
                    <span style="font-size: 13px;font-family: 宋体">　</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">　</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">　</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; </span><span style="font-size: 13px;font-family: 宋体">（签名、公章）</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">　</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="font-size: 13px;font-family: 宋体">年&nbsp; &nbsp; 月&nbsp; 日</span>
                </p>
            </td>
        </tr>
        <tr style=";height:175px">
            <td width="74" style="border-top-style: none; border-left-style: none; border-bottom-color: black; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px;" height="175">
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">建设<br/> &nbsp; <br/> &nbsp; 单位<br/> &nbsp; <br/> &nbsp; 意见</span>
                </p>
            </td>
            <td width="520" style="border-top-color: windowtext; border-top-width: 1px; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: black; border-right-width: 1px; padding: 0px 7px;" height="175">
                <p>
                    <span style="font-size: 13px;font-family: 宋体">项目负责人：</span>
                </p>
                <p>
                    <span style="font-size: 13px;font-family: 宋体">　</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">　</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">　</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; </span><span style="font-size: 13px;font-family: 宋体">（签名、公章）</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">　</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; </span><span style="font-size: 13px;font-family: 宋体">年&nbsp; 月&nbsp; 日</span>
                </p>
            </td>
        </tr>
    </tbody>
</table>
<p>
    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br clear="all" style="page-break-before:always"/> </span> 
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p style="margin-right:7px;text-align:right">
    <span style="font-size: 13px;font-family: 宋体">共5页 第4页</span>
</p>
<table cellspacing="0" cellpadding="0" width="650" style="width: 728px;">
    <tbody>
        <tr style=";height:28px" class="firstRow">
            <td width="54" rowspan="10" style="border-color: windowtext; border-width: 1px; padding: 0px 7px;" height="28">
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">工程<br/> &nbsp; <br/> &nbsp; 竣工<br/> &nbsp; <br/> &nbsp; 验收<br/> &nbsp; <br/> &nbsp; 备案<br/> &nbsp; <br/> &nbsp; 文件<br/> &nbsp; <br/> &nbsp; 目录</span>
                </p>
            </td>
            <td width="596" colspan="4" rowspan="10" style="border-top-color: windowtext; border-top-width: 1px; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: black; border-right-width: 1px; padding: 0px 7px;" height="28">
                <p>
                    <span style="font-size: 13px;font-family: 宋体">1</span><span style="font-size: 13px;font-family: 宋体">、工程竣工验收报告；<br/> &nbsp; 2、工程施工许可证；<br/> &nbsp; 3、施工图设计文件审查意见；<br/> &nbsp; 4、单位工程质量综合验收文件（含勘察、设计、施工、工程监理等单位分别签署的质量合格文件，施工单位出具的工程竣工报告，建设单位出具的工程竣工验收申请报告，监理单位出具的工程质量评价报告等）；<br/> &nbsp; 5、市政基础设施的有关质量检测和功能性试验资料；<br/> &nbsp; 6、法律、行政法规规定应当由规划、环保等部门出具的认可文件或者准许使用文件；<br/> &nbsp; 7、法律规定应当由公安消防部门出具的对大型的人员密集场所和其他特殊建设工程验收合格的证明文件；<br/> &nbsp; 8、施工单位签署的工程质量保修书；<br/> &nbsp; 9、商品住宅的《住宅质量保证书》和《住宅使用说明书》；<br/> &nbsp; 10、法规、规章规定必须提供的其他文件。</span>
                </p>
            </td>
            <td style="border: none;" width="0" height="28"></td>
        </tr>
        <tr style=";height:28px">
            <td style="border: none;" width="0" height="28"></td>
        </tr>
        <tr style=";height:28px">
            <td style="border: none;" width="0" height="28"></td>
        </tr>
        <tr style=";height:28px">
            <td style="border: none;" width="0" height="28"></td>
        </tr>
        <tr style=";height:28px">
            <td style="border: none;" width="0" height="28"></td>
        </tr>
        <tr style=";height:28px">
            <td style="border: none;" width="0" height="28"></td>
        </tr>
        <tr style=";height:28px">
            <td style="border: none;" width="0" height="28"></td>
        </tr>
        <tr style=";height:28px">
            <td style="border: none;" width="0" height="28"></td>
        </tr>
        <tr style=";height:28px">
            <td style="border: none;" width="0" height="28"></td>
        </tr>
        <tr style=";height:118px">
            <td style="border: none;" width="0" height="118"></td>
        </tr>
        <tr style=";height:435px">
            <td width="54" style="border-right-color: windowtext; border-bottom-color: windowtext; border-left-color: windowtext; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-top-style: none; padding: 0px 7px;" height="435">
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">备案<br/> &nbsp; <br/> &nbsp; 意见</span>
                </p>
            </td>
            <td width="596" colspan="4" valign="top" style="border-top-style: none; border-bottom-style: none; border-left-style: none; border-right-color: black; border-right-width: 1px; padding: 0px 7px;" height="435">
                <p>
                    <span style="font-size: 13px;font-family: 宋体">　</span>
                </p>
                <p>
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
                </p>
                <p>
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
                </p>
                <p>
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
                </p>
                <p style="text-indent:27px">
                    <span style="font-size: 13px;font-family: 宋体">　<span style="text-decoration:underline;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; </span>工程的竣工验收备案文件已</span>
                </p>
                <p>
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
                </p>
                <p>
                    <span style="font-size: 13px;font-family: 宋体">于<span style="text-decoration:underline;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>年<span style="text-decoration:underline;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>月<span style="text-decoration:underline;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>日收讫，文件<span style="text-decoration:underline;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>。</span>
                </p>
                <p>
                    <span style="font-size: 13px;font-family: 宋体">　</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">　&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（公章）</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; </span><span style="font-size: 13px;font-family: 宋体">年&nbsp; 月&nbsp; 日</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">　</span>
                </p>
            </td>
            <td style="border: none;" width="0" height="435"></td>
        </tr>
        <tr style=";height:51px">
            <td width="162" colspan="2" style="border-right-color: windowtext; border-bottom-color: windowtext; border-left-color: windowtext; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-top-style: none; padding: 0px 7px;" height="51">
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">备案机关负责人</span>
                </p>
            </td>
            <td width="171" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px;" height="51"></td>
            <td width="141" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px;" height="51">
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">备案经办人</span>
                </p>
            </td>
            <td width="176" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: black; border-right-width: 1px; padding: 0px 7px;" height="51"></td>
            <td style="border: none;" width="0" height="51"></td>
        </tr>
        <tr height="0">
            <td width="54" style="border: none"></td>
            <td width="109" style="border: none"></td>
            <td width="171" style="border: none"></td>
            <td width="141" style="border: none"></td>
            <td width="176" style="border: none"></td>
            <td style="border: none" width="0"></td>
        </tr>
    </tbody>
</table>
<p style="margin-top:10px;text-indent: 20px">
    <span style="font-size: 13px;font-family: 宋体">注：表中<span style="text-decoration:underline;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>&nbsp;内填写齐全或基本齐全，不齐全或其他原因不能备案</span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br clear="all" style="page-break-before:always"/> </span> 
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p>
    <span style="font-size: 13px;font-family: 宋体"><br/></span>
</p>
<p style="margin-top:10px;text-align:right;text-indent:20px">
    <span style="font-size: 13px;font-family: 宋体">共5页 第5页</span>
</p>
<table cellspacing="0" cellpadding="0" width="650" style="width: 728px;">
    <tbody>
        <tr style=";height:466px" class="firstRow">
            <td width="650" valign="top" style="border-color: windowtext black black windowtext; border-width: 1px; padding: 0px 7px;" height="466">
                <p>
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
                </p>
                <p>
                    <span style="font-size: 13px;font-family: 宋体">备案意见：</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">　</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;&nbsp; <span style="text-decoration:underline;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span><span style="font-size: 13px;font-family: 宋体">工程的竣工验收备案文件</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
                </p>
                <p style="text-indent:33px">
                    <span style="font-size: 13px;font-family: 宋体">已于<span style="text-decoration:underline;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;</span>年 <span style="text-decoration:underline;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>月<span style="text-decoration:underline;"> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>日收讫。</span>
                </p>
                <p style="text-indent:33px">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
                </p>
                <p style="text-indent:60px">
                    <span style="font-size: 13px;font-family: 宋体">经核查，备案归档文件 <span style="text-decoration:underline;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>。&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; </span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
                </p>
                <p style="text-indent:60px">
                    <span style="font-size: 13px;font-family: 宋体">结论： <span style="text-decoration:underline;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>（同意/不同意）备案。</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
                </p>
                <p style="text-indent:60px">
                    <span style="font-size: 13px;font-family: 宋体">备案机关经办人（签字）：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;负责人（签章）：</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; </span><span style="font-size: 13px;font-family: 宋体">年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 月&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 日</span>
                </p>
                <p>
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
                </p>
            </td>
        </tr>
        <tr style=";height:341px">
            <td width="650" valign="top" style="border-top-style: none; border-left-color: windowtext; border-left-width: 1px; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: black; border-right-width: 1px; padding: 0px 7px;" height="341">
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
                </p>
                <p style="text-indent:60px">
                    <span style="font-size: 13px;font-family: 宋体">备案机关处理意见：</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">　&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; （公章）</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;</span>
                </p>
                <p style="text-align:center">
                    <span style="font-size: 13px;font-family: 宋体">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="font-size: 13px;font-family: 宋体">年 &nbsp;&nbsp;&nbsp;&nbsp;月 &nbsp;&nbsp;&nbsp;&nbsp;日</span>
                </p>
                <p>
                    <span style="font-size: 13px;font-family: 宋体">　</span>
                </p>
            </td>
        </tr>
    </tbody>
</table>
<p style="margin-top:10px;text-align:right;text-indent:12px">
    <span style="font-size: 13px;font-family: 宋体;letter-spacing: 1px">注：处理意见主要指建设单位是否违反国家住建部第2号令《房屋建筑工程和市政基础设施工程竣工验收备案管理办法》的有关规定，如有违反行为，则按该办法第八条规定处罚。</span>
</p>
<p>
    <br/>
</p>`);
      // //获取html内容，返回: <p>hello</p>
      // var html = ue.getContent();
      // //获取纯文本内容，返回: hello
      // var txt = ue.getContentTxt();
    });
  }

}
