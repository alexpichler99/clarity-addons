(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"/W8c":function(e,c,n){"use strict";n.r(c),n.d(c,"ReadonlyDemoModule",(function(){return k}));var b=n("ofXK"),o=n("8MG2"),l=n("6Y1o"),a=n("N+3j"),r=n("fXoL"),t=n("0G9f"),i=n("3Pt+"),d=n("vAyd");function u(e,c){if(1&e){const e=r.Pb();r.Ob(0,"form",31),r.Ob(1,"clr-checkbox-container",9),r.Ob(2,"label"),r.Bc(3,"Checkboxes"),r.Nb(),r.Ob(4,"clr-checkbox-wrapper"),r.Ob(5,"input",18),r.Vb("ngModelChange",(function(c){return r.rc(e),r.Xb().checkValue1=c})),r.Nb(),r.Ob(6,"label"),r.Bc(7,"Option 1"),r.Nb(),r.Nb(),r.Ob(8,"clr-checkbox-wrapper"),r.Ob(9,"input",19),r.Vb("ngModelChange",(function(c){return r.rc(e),r.Xb().checkValue2=c})),r.Nb(),r.Ob(10,"label"),r.Bc(11,"Option 2"),r.Nb(),r.Nb(),r.Ob(12,"clr-checkbox-wrapper"),r.Ob(13,"input",20),r.Vb("ngModelChange",(function(c){return r.rc(e),r.Xb().checkValue3=c})),r.Nb(),r.Ob(14,"label"),r.Bc(15,"Option 3"),r.Nb(),r.Nb(),r.Nb(),r.Ob(16,"clr-radio-container",12),r.Ob(17,"label"),r.Bc(18,"Radiobuttons"),r.Nb(),r.Ob(19,"clr-radio-wrapper"),r.Ob(20,"input",7),r.Vb("ngModelChange",(function(c){return r.rc(e),r.Xb().radioValue=c})),r.Nb(),r.Ob(21,"label"),r.Bc(22,"Option 1"),r.Nb(),r.Nb(),r.Ob(23,"clr-radio-wrapper"),r.Ob(24,"input",7),r.Vb("ngModelChange",(function(c){return r.rc(e),r.Xb().radioValue=c})),r.Nb(),r.Ob(25,"label"),r.Bc(26,"Option 2"),r.Nb(),r.Nb(),r.Ob(27,"clr-radio-wrapper"),r.Ob(28,"input",7),r.Vb("ngModelChange",(function(c){return r.rc(e),r.Xb().radioValue=c})),r.Nb(),r.Ob(29,"label"),r.Bc(30,"Option 3"),r.Nb(),r.Nb(),r.Nb(),r.Nb()}if(2&e){const e=r.Xb();r.xb(5),r.fc("ngModel",e.checkValue1),r.xb(4),r.fc("ngModel",e.checkValue2),r.xb(4),r.fc("ngModel",e.checkValue3),r.xb(7),r.fc("value",1)("ngModel",e.radioValue),r.xb(4),r.fc("value",2)("ngModel",e.radioValue),r.xb(4),r.fc("value",3)("ngModel",e.radioValue)}}function h(e,c){if(1&e){const e=r.Pb();r.Ob(0,"form",31),r.Ob(1,"clr-checkbox-container"),r.Ob(2,"label"),r.Bc(3,"Checkboxes"),r.Nb(),r.Ob(4,"clr-checkbox-wrapper"),r.Ob(5,"input",18),r.Vb("ngModelChange",(function(c){return r.rc(e),r.Xb().checkValue1=c})),r.Nb(),r.Ob(6,"label"),r.Bc(7,"Option 1"),r.Nb(),r.Nb(),r.Ob(8,"clr-checkbox-wrapper"),r.Ob(9,"input",19),r.Vb("ngModelChange",(function(c){return r.rc(e),r.Xb().checkValue2=c})),r.Nb(),r.Ob(10,"label"),r.Bc(11,"Option 2"),r.Nb(),r.Nb(),r.Ob(12,"clr-checkbox-wrapper"),r.Ob(13,"input",20),r.Vb("ngModelChange",(function(c){return r.rc(e),r.Xb().checkValue3=c})),r.Nb(),r.Ob(14,"label"),r.Bc(15,"Option 3"),r.Nb(),r.Nb(),r.Nb(),r.Ob(16,"clr-radio-container"),r.Ob(17,"label"),r.Bc(18,"Radiobuttons"),r.Nb(),r.Ob(19,"clr-radio-wrapper"),r.Ob(20,"input",7),r.Vb("ngModelChange",(function(c){return r.rc(e),r.Xb().radioValue=c})),r.Nb(),r.Ob(21,"label"),r.Bc(22,"Option 1"),r.Nb(),r.Nb(),r.Ob(23,"clr-radio-wrapper"),r.Ob(24,"input",7),r.Vb("ngModelChange",(function(c){return r.rc(e),r.Xb().radioValue=c})),r.Nb(),r.Ob(25,"label"),r.Bc(26,"Option 2"),r.Nb(),r.Nb(),r.Ob(27,"clr-radio-wrapper"),r.Ob(28,"input",7),r.Vb("ngModelChange",(function(c){return r.rc(e),r.Xb().radioValue=c})),r.Nb(),r.Ob(29,"label"),r.Bc(30,"Option 3"),r.Nb(),r.Nb(),r.Nb(),r.Nb()}if(2&e){const e=r.Xb();r.xb(5),r.fc("ngModel",e.checkValue1),r.xb(4),r.fc("ngModel",e.checkValue2),r.xb(4),r.fc("ngModel",e.checkValue3),r.xb(7),r.fc("value",1)("ngModel",e.radioValue),r.xb(4),r.fc("value",2)("ngModel",e.radioValue),r.xb(4),r.fc("value",3)("ngModel",e.radioValue)}}let p=(()=>{class e extends a.a{constructor(){super("readonly"),this.htmlCheckboxExample='\n<clr-checkbox-container readonly>\n    ...\n</clr-checkbox-container>\n\n<clr-checkbox-container readonly show-only-selected="true">\n    ...\n</clr-checkbox-container>\n',this.htmlRadiobuttonExample='\n<clr-radiobutton-container readonly>\n    ...\n</clr-radiobutton-container>\n\n<clr-radiobutton-container readonly show-only-selected="true">\n    ...\n</clr-radiobutton-container>\n',this.htmlRadioExampleDanger='\n<clr-checkbox-container readonly class="readonly-danger">\n    ...\n</clr-checkbox-container>\n',this.htmlReadonlyConditional='\n<clr-checkbox-container [attr.readonly]="shouldCheckboxesBeReadOnly || null">\n...\n</clr-checkbox-container>\n',this.radioValue=1,this.checkValue1=!0,this.checkValue3=!0}}return e.\u0275fac=function(c){return new(c||e)},e.\u0275cmp=r.Cb({type:e,selectors:[["clr-readonly-demo"]],hostVars:4,hostBindings:function(e,c){2&e&&r.Ab("content-area",!0)("dox-content-panel",!0)},features:[r.ub],decls:163,vars:40,consts:[[3,"ng","ui","title","newLayout"],[1,"component-summary"],["id","code-examples"],["id","examples"],[1,"clr-code"],[1,"clr-row"],[1,"clr-col-3"],["clrRadio","","type","radio","name","status1",3,"value","ngModel","ngModelChange"],[1,"clr-col-4"],["readonly",""],["clrRadio","","type","radio","name","status3",3,"value","ngModel","ngModelChange"],[1,"clr-col-5"],["readonly","","show-only-selected","true"],["clrRadio","","type","radio","name","status2",3,"value","ngModel","ngModelChange"],[3,"clrCode"],["clrCheckbox","","type","checkbox","name","check1",3,"ngModel","ngModelChange"],["clrCheckbox","","type","checkbox","name","check2",3,"ngModel","ngModelChange"],["clrCheckbox","","type","checkbox","name","check3",3,"ngModel","ngModelChange"],["clrCheckbox","","type","checkbox","name","check4",3,"ngModel","ngModelChange"],["clrCheckbox","","type","checkbox","name","check5",3,"ngModel","ngModelChange"],["clrCheckbox","","type","checkbox","name","check6",3,"ngModel","ngModelChange"],["clrCheckbox","","type","checkbox","name","check7",3,"ngModel","ngModelChange"],["clrCheckbox","","type","checkbox","name","check8",3,"ngModel","ngModelChange"],["clrCheckbox","","type","checkbox","name","check9",3,"ngModel","ngModelChange"],["clrTitle","Title",3,"clrViewRef","clrEditRef"],["viewBlock",""],["editBlock",""],["readonly","",1,"readonly-danger"],["clrCheckbox","","type","checkbox","name","check10",3,"ngModel","ngModelChange"],["clrCheckbox","","type","checkbox","name","check11",3,"ngModel","ngModelChange"],["clrCheckbox","","type","checkbox","name","check12",3,"ngModel","ngModelChange"],["clrForm","","clrLayout","horizontal"]],template:function(e,c){if(1&e&&(r.Ob(0,"clr-doc-wrapper",0),r.Ob(1,"article"),r.Ob(2,"h5",1),r.Bc(3," This page describe readonly checkboxes and radio buttons."),r.Jb(4,"br"),r.Nb(),r.Ob(5,"div",2),r.Ob(6,"h3",3),r.Bc(7,"Code & Examples"),r.Nb(),r.Bc(8," To apply the readonly style, just add "),r.Ob(9,"code",4),r.Bc(10,"readonly"),r.Nb(),r.Bc(11," to "),r.Ob(12,"code",4),r.Bc(13,"clr-radio-container"),r.Nb(),r.Bc(14," or "),r.Ob(15,"code",4),r.Bc(16,"clr-checkbox-container"),r.Nb(),r.Bc(17,"."),r.Jb(18,"br"),r.Bc(19," To just show checked options also add attribute "),r.Ob(20,"code",4),r.Bc(21,'show-only-selected="true"'),r.Nb(),r.Bc(22," to the container. "),r.Ob(23,"h4"),r.Bc(24,"Radiobuttons"),r.Nb(),r.Ob(25,"div",5),r.Ob(26,"div",6),r.Ob(27,"clr-radio-container"),r.Ob(28,"label"),r.Bc(29,"Radiobuttons"),r.Nb(),r.Ob(30,"clr-radio-wrapper"),r.Ob(31,"input",7),r.Vb("ngModelChange",(function(e){return c.radioValue=e})),r.Nb(),r.Ob(32,"label"),r.Bc(33,"Option 1"),r.Nb(),r.Nb(),r.Ob(34,"clr-radio-wrapper"),r.Ob(35,"input",7),r.Vb("ngModelChange",(function(e){return c.radioValue=e})),r.Nb(),r.Ob(36,"label"),r.Bc(37,"Option 2"),r.Nb(),r.Nb(),r.Ob(38,"clr-radio-wrapper"),r.Ob(39,"input",7),r.Vb("ngModelChange",(function(e){return c.radioValue=e})),r.Nb(),r.Ob(40,"label"),r.Bc(41,"Option 3"),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(42,"div",8),r.Ob(43,"clr-radio-container",9),r.Ob(44,"label"),r.Bc(45,"Radiobuttons (readonly)"),r.Nb(),r.Ob(46,"clr-radio-wrapper"),r.Ob(47,"input",10),r.Vb("ngModelChange",(function(e){return c.radioValue=e})),r.Nb(),r.Ob(48,"label"),r.Bc(49,"Option 1"),r.Nb(),r.Nb(),r.Ob(50,"clr-radio-wrapper"),r.Ob(51,"input",10),r.Vb("ngModelChange",(function(e){return c.radioValue=e})),r.Nb(),r.Ob(52,"label"),r.Bc(53,"Option 2"),r.Nb(),r.Nb(),r.Ob(54,"clr-radio-wrapper"),r.Ob(55,"input",10),r.Vb("ngModelChange",(function(e){return c.radioValue=e})),r.Nb(),r.Ob(56,"label"),r.Bc(57,"Option 3"),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(58,"div",11),r.Ob(59,"clr-radio-container",12),r.Ob(60,"label"),r.Bc(61,'Radiobuttons (readonly, show-only-selected="true")'),r.Nb(),r.Ob(62,"clr-radio-wrapper"),r.Ob(63,"input",13),r.Vb("ngModelChange",(function(e){return c.radioValue=e})),r.Nb(),r.Ob(64,"label"),r.Bc(65,"Option 1"),r.Nb(),r.Nb(),r.Ob(66,"clr-radio-wrapper"),r.Ob(67,"input",13),r.Vb("ngModelChange",(function(e){return c.radioValue=e})),r.Nb(),r.Ob(68,"label"),r.Bc(69,"Option 2"),r.Nb(),r.Nb(),r.Ob(70,"clr-radio-wrapper"),r.Ob(71,"input",13),r.Vb("ngModelChange",(function(e){return c.radioValue=e})),r.Nb(),r.Ob(72,"label"),r.Bc(73,"Option 3"),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Jb(74,"clr-code-snippet",14),r.Ob(75,"h4"),r.Bc(76,"Checkboxes"),r.Nb(),r.Ob(77,"div",5),r.Ob(78,"div",6),r.Ob(79,"clr-checkbox-container"),r.Ob(80,"label"),r.Bc(81,"Checkboxes"),r.Nb(),r.Ob(82,"clr-checkbox-wrapper"),r.Ob(83,"input",15),r.Vb("ngModelChange",(function(e){return c.checkValue1=e})),r.Nb(),r.Ob(84,"label"),r.Bc(85,"Option 1"),r.Nb(),r.Nb(),r.Ob(86,"clr-checkbox-wrapper"),r.Ob(87,"input",16),r.Vb("ngModelChange",(function(e){return c.checkValue2=e})),r.Nb(),r.Ob(88,"label"),r.Bc(89,"Option 2"),r.Nb(),r.Nb(),r.Ob(90,"clr-checkbox-wrapper"),r.Ob(91,"input",17),r.Vb("ngModelChange",(function(e){return c.checkValue3=e})),r.Nb(),r.Ob(92,"label"),r.Bc(93,"Option 3"),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(94,"div",8),r.Ob(95,"clr-checkbox-container",9),r.Ob(96,"label"),r.Bc(97,"Checkboxes (readonly)"),r.Nb(),r.Ob(98,"clr-checkbox-wrapper"),r.Ob(99,"input",18),r.Vb("ngModelChange",(function(e){return c.checkValue1=e})),r.Nb(),r.Ob(100,"label"),r.Bc(101,"Option 1"),r.Nb(),r.Nb(),r.Ob(102,"clr-checkbox-wrapper"),r.Ob(103,"input",19),r.Vb("ngModelChange",(function(e){return c.checkValue2=e})),r.Nb(),r.Ob(104,"label"),r.Bc(105,"Option 2"),r.Nb(),r.Nb(),r.Ob(106,"clr-checkbox-wrapper"),r.Ob(107,"input",20),r.Vb("ngModelChange",(function(e){return c.checkValue3=e})),r.Nb(),r.Ob(108,"label"),r.Bc(109,"Option 3"),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(110,"div",11),r.Ob(111,"clr-checkbox-container",12),r.Ob(112,"label"),r.Bc(113,'Checkboxes (readonly, show-only-selected="true")'),r.Nb(),r.Ob(114,"clr-checkbox-wrapper"),r.Ob(115,"input",21),r.Vb("ngModelChange",(function(e){return c.checkValue1=e})),r.Nb(),r.Ob(116,"label"),r.Bc(117,"Option 1"),r.Nb(),r.Nb(),r.Ob(118,"clr-checkbox-wrapper"),r.Ob(119,"input",22),r.Vb("ngModelChange",(function(e){return c.checkValue2=e})),r.Nb(),r.Ob(120,"label"),r.Bc(121,"Option 2"),r.Nb(),r.Nb(),r.Ob(122,"clr-checkbox-wrapper"),r.Ob(123,"input",23),r.Vb("ngModelChange",(function(e){return c.checkValue3=e})),r.Nb(),r.Ob(124,"label"),r.Bc(125,"Option 3"),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Jb(126,"clr-code-snippet",14),r.Ob(127,"h4"),r.Bc(128,"View/Edit Section"),r.Nb(),r.Bc(129," Example of how this could look in a View/Edit Section. Radiobuttons in view mode only show selected options. Checkboxes show all options in view mode. "),r.Ob(130,"clr-view-edit-section",24),r.zc(131,u,31,9,"ng-template",null,25,r.Ac),r.zc(133,h,31,9,"ng-template",null,26,r.Ac),r.Nb(),r.Ob(135,"h4"),r.Bc(136,"Conditional readonly"),r.Nb(),r.Bc(137," Sometimes the readonly mode needs to be conditional. This can be achieved by attribute binding of angular, as null values prevent rendering of the attribute. "),r.Jb(138,"clr-code-snippet",14),r.Ob(139,"h4"),r.Bc(140,"Stylings for readonly"),r.Nb(),r.Bc(141," The class "),r.Ob(142,"code",4),r.Bc(143,"readonly-danger"),r.Nb(),r.Bc(144," on the container gives the checked options more attention. "),r.Ob(145,"div",5),r.Ob(146,"div",6),r.Ob(147,"clr-checkbox-container",27),r.Ob(148,"label"),r.Bc(149,"Checkboxes (readonly + danger)"),r.Nb(),r.Ob(150,"clr-checkbox-wrapper"),r.Ob(151,"input",28),r.Vb("ngModelChange",(function(e){return c.checkValue1=e})),r.Nb(),r.Ob(152,"label"),r.Bc(153,"Option 1"),r.Nb(),r.Nb(),r.Ob(154,"clr-checkbox-wrapper"),r.Ob(155,"input",29),r.Vb("ngModelChange",(function(e){return c.checkValue2=e})),r.Nb(),r.Ob(156,"label"),r.Bc(157,"Option 2"),r.Nb(),r.Nb(),r.Ob(158,"clr-checkbox-wrapper"),r.Ob(159,"input",30),r.Vb("ngModelChange",(function(e){return c.checkValue3=e})),r.Nb(),r.Ob(160,"label"),r.Bc(161,"Option 3"),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Jb(162,"clr-code-snippet",14),r.Nb(),r.Nb(),r.Nb()),2&e){const e=r.nc(132),n=r.nc(134);r.fc("ng",c.ng)("ui",c.ui)("title",c.title)("newLayout",c.newLayout),r.xb(31),r.fc("value",1)("ngModel",c.radioValue),r.xb(4),r.fc("value",2)("ngModel",c.radioValue),r.xb(4),r.fc("value",3)("ngModel",c.radioValue),r.xb(8),r.fc("value",1)("ngModel",c.radioValue),r.xb(4),r.fc("value",2)("ngModel",c.radioValue),r.xb(4),r.fc("value",3)("ngModel",c.radioValue),r.xb(8),r.fc("value",1)("ngModel",c.radioValue),r.xb(4),r.fc("value",2)("ngModel",c.radioValue),r.xb(4),r.fc("value",3)("ngModel",c.radioValue),r.xb(3),r.fc("clrCode",c.htmlRadiobuttonExample),r.xb(9),r.fc("ngModel",c.checkValue1),r.xb(4),r.fc("ngModel",c.checkValue2),r.xb(4),r.fc("ngModel",c.checkValue3),r.xb(8),r.fc("ngModel",c.checkValue1),r.xb(4),r.fc("ngModel",c.checkValue2),r.xb(4),r.fc("ngModel",c.checkValue3),r.xb(8),r.fc("ngModel",c.checkValue1),r.xb(4),r.fc("ngModel",c.checkValue2),r.xb(4),r.fc("ngModel",c.checkValue3),r.xb(3),r.fc("clrCode",c.htmlCheckboxExample),r.xb(4),r.fc("clrViewRef",e)("clrEditRef",n),r.xb(8),r.fc("clrCode",c.htmlReadonlyConditional),r.xb(13),r.fc("ngModel",c.checkValue1),r.xb(4),r.fc("ngModel",c.checkValue2),r.xb(4),r.fc("ngModel",c.checkValue3),r.xb(3),r.fc("clrCode",c.htmlRadioExampleDanger)}},directives:[t.a,o.N,o.E,o.O,l.T,i.t,i.b,o.M,i.m,i.p,d.a,o.g,o.h,i.a,o.f,l.O,i.A,i.n,i.o,o.w,o.F],encapsulation:2}),e})();var O=n("JsA7"),g=n("tyNb"),N=n("XPsC");let k=(()=>{class e{}return e.\u0275mod=r.Gb({type:e}),e.\u0275inj=r.Fb({factory:function(c){return new(c||e)},imports:[[b.c,N.a,O.a,g.g.forChild([{path:"",component:p}]),i.h,o.x,o.a,l.b]]}),e})()}}]);