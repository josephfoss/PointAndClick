(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 2000,
	height: 1000,
	fps: 11,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



// stage content:
(lib.Fire = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AkSBNQoKgMmlhLQghgGAJghQAKgiAhAGQD1AtEcAXQGUAdIXgOQA5gBNzgkQAigBAAAhQAAAjgiABIobAXQm/ATk1AAQhmAAhXgCg");
	this.shape.setTransform(997.6,622.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AjQAsQoxgIm3hPMAlxAAtImdASQpDAYlIAAIhhAAg");
	this.shape_1.setTransform(997.7,622.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AThC7QgUgWgggbIg4gsQgWgSgcgcIgwgwQgZgXgqgNQgKgDhCgOIikgiQgcgFglAGQgqAKgWADQg8AIhUgFIiUgLIhFgFQgogDgcgFIg+gOIg+gOQgwgKhTAFQg6AEhTAMIiMAVIhNALQgtAFghgBQgVgBgwgIQgsgHgZAAQiwgBhzAkQg8AThKAiIghAMQgTAIgMAIQgGAEgHAIIgMAMIgaAbQgLAOgFASQgFAWgMAQQgLAOgUANQgdARgRgeQgSgeAdgSQAKgGACgDIAEgOQAHgdAMgRQAYggAnggQAMgLAUgKIAjgQIBNghQBcgmBDgNQA8gMBcgEQA5gDATAAQAqAAAhAFIAkAGQAWAEAPABQARAAAXgBIAngEQAygFBggPQBkgQAvgFQBTgKBAADQAtACBTASQBXAUApADICVANQBYAHA+gEQAVgBAygLQAtgKAaAAQAeABArAIIBHARIBLAPQAsAJAdAIQBCARAxA5QAdAeBCA0QBCA1AcAgQAWAZgZAZQgMAMgMAAQgMAAgLgNg");
	this.shape_2.setTransform(1001.7,605.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("Az5CPQAXgNAFgOQAEgWAIgUQAEgJAYgZIAgggQAIgIAYgLQBWgnAqgRQBIgcA9gMQA7gMB6gFQBCgCAcADIAlAGIAkAGQAiAEBTgJQBKgJCLgXQB9gRBXADQAjACBKASQBNASAfADIDMAOQA/AFAiAAQA2AAArgJIAigIQAVgFAOgBQAZgBArAKIC+AoQAdAGANAEQAYAHAQAKQAZAPAmApQAXAbBBAzQBBAzAXAcg");
	this.shape_3.setTransform(1001.7,605.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373535").s().p("ACeBBIihgjQhfgUhGgHQghgDAAghQAAgjAhADQBKAIBiAUICsAkQAhAFgJAiQgIAcgYAAIgKgBg");
	this.shape_4.setTransform(1136.3,618.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AjKAkQgKghAhgHQCZglDGgVQAigDAAAjQAAAhgiADQi5AUiTAkQgHABgGAAQgWAAgHgbg");
	this.shape_5.setTransform(863.3,613.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#373535").ss(7,1,1).p("AAAg0IAABp");
	this.shape_6.setTransform(826.1,601.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#373535").ss(7,1,1).p("AAAh7IAAD3");
	this.shape_7.setTransform(865.4,597.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#373535").ss(7,1,1).p("AAAhGIAACN");
	this.shape_8.setTransform(1176.4,609.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#373535").ss(7,1,1).p("AAAiAIAAEB");
	this.shape_9.setTransform(1140,604);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#373535").ss(8,1,1).p("AA6gdIhzA7");
	this.shape_10.setTransform(1179.2,598.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#373535").ss(8,1,1).p("AA1glIhpBL");
	this.shape_11.setTransform(1145.3,584);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#373535").ss(8,1,1).p("Ag/gzIB/Bn");
	this.shape_12.setTransform(859,579.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#373535").ss(8,1,1).p("Ag+gcIB9A5");
	this.shape_13.setTransform(821.6,592.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#373535").ss(8,1,1).p("ABWAzIirhl");
	this.shape_14.setTransform(1185,623.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#373535").ss(8,1,1).p("ABEAoIiHhP");
	this.shape_15.setTransform(1125.2,630.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#373535").ss(8,1,1).p("AAtA+IhZh6");
	this.shape_16.setTransform(1045.9,636.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#373535").ss(8,1,1).p("AAAA+IAAh6");
	this.shape_17.setTransform(965,636.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#373535").ss(8,1,1).p("AgmBAIBNh/");
	this.shape_18.setTransform(891.3,630.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#373535").ss(8,1,1).p("AhWAiICthD");
	this.shape_19.setTransform(827.9,616.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373535").s().p("AnmCcQiYgGjkgVIi/gSQhugLhRgNQhwgQg4gKQhggQhHgSQiRgijHhXQgPgGgEgSQgEgSAIgNQAJgOAQgEQAOgDAQAHQDSBbCmAkQCiAjDbAYQGKAwFmAIQELAHB2ABQDYADCrgFQBMgDB0gGIDAgLIC/gLQBrgGBUgIIF/gnQDEgTCeg8QAPgGAQAKQAOAJAFAPQAEAQgIAOQgIANgQAGQheAihvAWQhZASh5AMIjXAWQh+ANhaAHQhSAHhtAGIjAAJIjFALQhyAGhUABIiuACQkUAAlLgNg");
	this.shape_20.setTransform(1002.8,617);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AdiDBQgYgTgbgSQh6hPing3Qh+gni3gkQhUgQhdgNQgCgMgHgMQgIgOgPgLQgMgIgRgIIgfgNIgpgUIAGABQDgAZC/ArQCyAnB9AwQCiA8ByBYQANAKAFAOQAFAQgJAOQgIAOgRAFQgGACgGAAQgKAAgIgGgA+QBcQgcgcAcgaQAbgYAmgUQBGgnBfghQBFgXBpgcQBigZB9gRQBPgLCSgNIAjgDQgaANgRAPQgJAIgLAOIgTAWIgQARIgPACQjxAWirA0QhtAhg/AWQguATgYALQgnAUgYAXQgOAMgNAAQgPAAgPgPg");
	this.shape_21.setTransform(1002.6,597);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#373535").ss(7,1,1).p("AAAivIAAFf");
	this.shape_22.setTransform(1173.3,766.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#373535").ss(7,1,1).p("AAAjDIAAGH");
	this.shape_23.setTransform(1102.4,776.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#373535").ss(7,1,1).p("AAAjCIAAGF");
	this.shape_24.setTransform(1015.7,781.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#373535").ss(7,1,1).p("AAAizIAAFn");
	this.shape_25.setTransform(924.8,776.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#373535").ss(7,1,1).p("AAAi/IAAF/");
	this.shape_26.setTransform(847.7,766.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#373535").ss(7,1,1).p("AAAi4IAAFx");
	this.shape_27.setTransform(1199.1,724.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#373535").ss(7,1,1).p("AAAirIAAFX");
	this.shape_28.setTransform(1136.2,733.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#373535").ss(7,1,1).p("AAAi4IAAFx");
	this.shape_29.setTransform(1058.8,741.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#373535").ss(7,1,1).p("AAAi3IAAFv");
	this.shape_30.setTransform(970.3,742);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#373535").ss(7,1,1).p("AAAi4IAAFx");
	this.shape_31.setTransform(887.4,735.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#373535").ss(7,1,1).p("AAAi4IAAFx");
	this.shape_32.setTransform(815.3,718.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#373535").ss(7,1,1).p("AAAi0IAAFp");
	this.shape_33.setTransform(1193.7,646.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#373535").ss(7,1,1).p("AAAjLIAAGX");
	this.shape_34.setTransform(1167.3,691.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#373535").ss(7,1,1).p("AAAizIAAFn");
	this.shape_35.setTransform(1132,656.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#373535").ss(7,1,1).p("AAAjQIAAGh");
	this.shape_36.setTransform(1100.7,699.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#373535").ss(7,1,1).p("AAAi/IAAGA");
	this.shape_37.setTransform(1050.4,662.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#373535").ss(7,1,1).p("AAAjMIAAGZ");
	this.shape_38.setTransform(1012,703.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#373535").ss(7,1,1).p("AAAi/IAAGA");
	this.shape_39.setTransform(965,662.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#373535").ss(7,1,1).p("AAAjPIAAGe");
	this.shape_40.setTransform(924.8,700);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#373535").ss(7,1,1).p("AAAi5IAAF0");
	this.shape_41.setTransform(887.4,655.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#373535").ss(7,1,1).p("AAAjQIAAGh");
	this.shape_42.setTransform(845,688.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#373535").ss(7,1,1).p("AAAjBIAAGD");
	this.shape_43.setTransform(819.1,639.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#373535").s().p("AhmDcQk6gIiBgGQifgIkWgiQibgSg6gIQh3gQhdgSIi8gnQhrgXhPgbQg9gTh1g3Qhyg1hNgsQgdgQARgfQASgeAdARQBVAvB8A6QB0A2BUAYQCcAsEFAsQBWAPB8APIDUAYQC3AXD2AIQEpALCLACQDwAEDBgIQCSgGEjgXQEogUCGgSQD5gfC3gZQDYgcCphVQAegPASAfQARAegeAPQhsA0hxAgQhTAXiRATIjzAhQiNAShmALQheAKh+AJIjcAPIjdAQQiAAIheACIiOABQiDAAihgDg");
	this.shape_44.setTransform(1001.4,742.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#373535").s().p("AhmDbQk6gHiBgGQifgIkWgiQibgSg6gIQh3gQhcgSIi9gnQhrgXhPgbQg7gSh2g4Qhyg0hOgtQgdgQARgfQASgeAdARQBVAvB8A5QB3A4BSAXQCcAsEEAsQBWAPB9AOIDTAZQC2AWD3AJQEpALCLACQDxAEDAgIQCSgGEjgXQEogVCGgRQD8gfC0gZQDYgbCphWQAegOASAeQASAegfAPQhsA0hxAgQhSAXiSATIjzAhQiMAThnAKQhdAKh+AJIjcAPIjeAQQiAAIheACIiOABQiEAAiggEg");
	this.shape_45.setTransform(1001,705.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#373535").s().p("AhmDcQk6gIiBgHQifgHkWghQibgTg6gIQh3gQhdgSIi8gmQhrgYhPgbQg9gTh1g3Qhyg1hNgsQgdgQARgeQASgfAdARQBVAwB8A5QB0A2BUAZQCcArEFAsQBWAPB8APIDUAYQC3AXD2AIQEpALCLABQDwAFDBgIQCSgGEjgXQEogUCGgRQD5gfC3gaQDYgcCphUQAegQASAfQARAegeAPQhsA0hxAgQhTAXiRATIjzAhQiNAThmAKQheAKh+AJIjcAPIjdAQQiAAIheACIiOABQiDAAihgDg");
	this.shape_46.setTransform(1001.4,663.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AiDDyQiegHklgRQnrgdl8hLQjhgtipg1QhkgehIgmQhYgvg6hBQghgjAjgkQAPgOASgBQAUgCAPARQA9BDBiAtQBEAgB0AhQDkA8DlAnQC/AhDnAVQCqAQD/AOQETAQCrAFQDzAIDKgEQNZgRM0kBQAWgHARALQAQAKAFATQAFAUgIARQgIATgWAHQnVCSniBGQmwA+m9ACIgTAAQjCAAjtgKg");
	this.shape_47.setTransform(1001.1,780.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AAIM4QgTAAgOgMQgQgNgBgXQgGi/gCiYQgLpPAOppQABgXAQgNQAOgMASAAQAVAAANAMQAQANgBAXQgFDlgBBzQgHJgASJXQABAXgPANQgNAMgUAAIgBAAg");
	this.shape_48.setTransform(787.3,682.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AhmDqIjdgFQiBgEhdgFQingIkOghIjXgaQh5gRhdgSIi8gmQhrgYhPgbQgpgOgzgUIhZgpQhogwhYgxQgUgMgDgUQgEgSALgRQAKgSARgGQAUgHAUALQBUAwB8A5QBxA1BUAYQChAvEAApQBVAPB8AOIDRAZQC+AWDvAJQEiAKCSACQDwAEDBgIQBZgDCCgKIDagQQEfgTCPgSQDwgeC8gaQDWgcCnhTQAVgKATAIQASAGALASQAKARgEASQgEATgUALQhuA0hzAhQgzAOhAALQgrAIhKAKIjzAgQiNAThmALQheAKh+AJIjcAPIjdAPQiAAIheACQhIAChWAAQh9AAiXgEg");
	this.shape_49.setTransform(1001.4,624);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("EAhJAExQgSgFgNgRIgwg3Qhyh4izhUQiQhDjFgxQjRg0j5gcQhQgIhbgHQgGgOgOgLQgOgMghgOIiHg6IgJgEIA7ADQENAPDHAcQD8AjDOBAQGoCCDIEBQAMAQgHAWQgHAVgQAKQgMAHgMAAQgHAAgHgDgEghWACnQgWAAgOgOQgPgPABgUQABgTANgRQAZgfAwgkQBGgzB2g2QB2g2BNgbQBsgmCNgaQBYgQCngUQDRgZDcgLQgjAZgTAQQgTASgdAlIgHAKQjOAPjcAcQkBAijDBRQhyAuhCAkQgyAbggAWQgqAfgbAiQgLAOgVAAIgDAAg");
	this.shape_50.setTransform(1001.3,592.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("AgcMmQgPgOAAgXIgBlRIgEpXIgFpaQgBgXAQgNQAOgMAUAAQASAAAPAMQAPAOABAWIACFTQAHMfABGQQAAAXgQAOQgOAMgUAAQgTAAgOgMg");
	this.shape_51.setTransform(1215.2,695.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#373535").ss(5,1,1).p("AFeBVQgEgYgIgVQgwg0g+giQgIgEgGAAQgEABgDAEQgFAFgCABQgHAFgKgDQgIgDgHgHQgHgKgEgFQgHgJgGgDQgHgEgEACQgEABgDAFQgEAJgBAAQgFALgOADQgOACgJgHQgDgCgOgRQgKgLgJABQgJAAgKAOQgLAOgHACQgIADgMgIQgCgBgSgRQgHgFgEAAQgIAAgFAKQgJAKgPAUQgHAKgGgBQgDAAgGgGIgsgwQgfAYgUATQgEgDgDgMQgCgLgGgDQgGgBgHAEQgtAWggAoQghAngMAx");
	this.shape_52.setTransform(998.9,586.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#373535").ss(10,1,1).p("AynG4Qgcg+AThMQARhCAvg9QBThvCvhfQAlgVBzg6QBfgxA3ggQgCAcAIAUQAKAZAVABQAOABAWgPQBYg9BBgyQAMAVAYApQCIhfBSiXQAQAnBACPQBBhXAohsIBlDjQAmgbAMgvICTCQQAVg+AKgeQBvBpCUAhQADgTAKgjQBVBVBpA1QAlARBNAgQBCAgAnAhQA3AvAeBFQAdBFgFBJ");
	this.shape_53.setTransform(995,574);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#373535").s().p("AiOAfQgKggAhgIQB3gdCRgTIgDADQgMAIgNAOQgJAKgDAIQgFAKADAKQABAGACAFQhvAQhfAXQgHACgGAAQgWAAgHgbg");
	this.shape_54.setTransform(857.3,613.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("EAhJAEwQgSgGgNgRIgwg3Qhyh4izhUQiQhCjFgxQjRg1j5gbIgUgCQABgMgGgLQgHgMgOgIQgJgFgTgHIgYgJIgSgQIgfggQChANCDASQD8AkDOA/QGoCDDIEBQAMAPgHAWQgHAVgQAKQgMAHgMAAQgHAAgHgCgEghWACmQgWgBgOgOQgPgPABgUQABgTANgQQAZggAwgkQBGgzB2g2QB2g2BNgaQBsgnCNgZQBYgQCngVQC0gVC8gLIgSAbQgPAagOANIgVAVQgIAJgEAJQi/AOjLAbQkBAijDBQQhyAuhCAkQgyAbggAXQgqAegbAiQgLAPgVAAIgDAAg");
	this.shape_55.setTransform(1001.3,592.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#373535").ss(5,1,1).p("AloDTQAVgYATgiQAKgRAWguQAshZAVgrQAOAWAJATQAIANAHADQAJABALgQQA9hhAthxQANAfAGAfQACAOAFAdQAGAZALAOQAEAGAGAAQAGACAFgMQAUgbAhgfQAZA4AKBBQAXAGAdgZQAigcAegmQAOAxAEAQQABADACAGQADAFAEACQAHAGAMgFQAKgFAHgLQAJgNAFgEQAKgIAKADQAJAWAQAvQAAADAMAzQAPA7ADAh");
	this.shape_56.setTransform(996.1,578.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#373535").ss(10,1,1).p("AT2M/QADhRgqhSQgmhIhDhAQgwguhUg8Qh5hWgSgOQilh/gpiJIhABaQiFlThelmQgnBdhMC3QhEiTgmihQgmiggFikQhREshvGWQgniXgUhMQh9FdjzEfQggiygQhXQgrCFhRB6QhQB4huBdQgPANiUBvQhjBLg1A9QgwA5gPA/QgOA+AbAr");
	this.shape_57.setTransform(994.9,528.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#373535").s().p("AdiCmQgYgTgbgSQh6hPing0QhkghiIgdIAIgaIARgiIAHgPIAGABQCyAoB9AwQCiA7ByBYQANALAFAOQAFAPgJAPQgIANgRAFQgGACgGAAQgKAAgIgGgA+QBCQgcgcAcgaQAbgXAmgVQBGgnBfghQBFgYBpgbQAhgJAkgHIgBAIIABAcIgBAbQABALACAIQg8ANg1AQQhtAhg/AYQguARgYAMQgnAUgYAWQgOANgNAAQgPAAgPgPg");
	this.shape_58.setTransform(1002.6,599.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("EAhJAEiQgSgGgNgRIgwg3Qhyh4izhUQiQhCjFgxIhHgRIABgCQACgHABgOIADgVIAKglQACgJABgIQBnAXBdAcQGoCDDIEBQAMAPgHAWQgHAVgQAKQgMAHgMAAQgHAAgHgCgEghWACYQgWgBgOgOQgPgPABgUQABgTANgQQAZggAwgjQBGg0B2g2QB2g2BNgaQBsgnCNgZIAsgIIAAABQgPARgNAgQgNAgADAWIABAEQirAiiLA5QhyAwhCAiQgyAbggAXQgqAegbAiQgLAPgVAAIgDAAgAyVkjIACAAIgCABIAAgBg");
	this.shape_59.setTransform(1001.3,593.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#373535").ss(6,1,1).p("AplHrQgUg5gGgjQgIg0ANgoQAKgcAbgjQArg3ADgDQAshCAGhOQA8AnAUBGQAkACAfgaQAegYANgkQAMgfAAgnQAAgcgGguQgIg0gCgWQgDgqAFggQAHgnAWgdQAYggAigKQgDAgAgAVQAgAUAggJQA6gRAdhPQAEgPAMgzQAKgpAKgXQAyAhAlA0QAlA1ANA8QAEAWAFAsQAGAnALAYQARAhAWAKQAVAJAZgKQAWgJAPgUQANgRAIgZQAGgSAGgdQAjAvAPAbQAZAqAGAnQAEAYgCAiQgBAUgCAlQgCBIAcAoQASAYAdAJQAfAJAZgPQAVgMAKgdQAGgUAEgjQBHBZAMB4QAMB4g1Bm");
	this.shape_60.setTransform(993.8,545.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#373535").ss(10,1,1).p("AyVXPQhugthAhzQg+htACh/QAFjSCpjuQAvhBBoh+QBmh8AwhEQCoj0gBjOQBXAZBDBCQBCBDAZBUQA+g7APhvQAIg7gFiQQgKjhAqjkQAThkAohBQAyhRBMgLQALCNBKAPQAuAKAngtQAfgjARg7QAgh4AEh9QAEh+gbh5QF+D6BlK4QAJA1ARAhQAYAsAmAAQAsABAYgyQASgpABg7QCsB6BYDLQBXDKgdDQQgHAxgYBlQgXBigGA0QgDAaADAQQADAYANANQAUAUAggJQAfgJAQgZQANgXADggQADgVgDgkQB/BqBVB9QBdCJAhCTQAiCdgrCaQgtChh0Bk");
	this.shape_61.setTransform(996.9,468.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#373535").s().p("AdiCfQgYgTgbgSQh6hPing1QhkghiIgdIAIgaIARghIAHgQIAGACQCyAnB9AwQCiA8ByBYQANAKAFAOQAFAQgJAOQgIAOgRAFQgGACgGAAQgKAAgIgGgA+QA6QgcgcAcgaQAbgWAmgWQBGgnBfghQBFgXBpgcIAFgBQAAAKACAHIAGAOIAFAPIAGAQIAHAMIACACQgnAKgkALQhtAhg/AYQguARgYALQgnAUgYAXQgOAMgNAAQgPAAgPgPg");
	this.shape_62.setTransform(1002.6,600.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#373535").s().p("EAhJAEiQgSgGgNgRIgwg3Qhyh4izhUQiQhCjFgxIhHgRIABgCQACgHABgOIADgVIAKglQACgJABgIQBnAXBdAcQGoCDDIEBQAMAPgHAWQgHAVgQAKQgMAHgMAAQgHAAgHgCgEghWACYQgWgBgOgOQgPgPABgUQABgTANgQQAZggAwgjQBGg0B2g2QB2g2BNgaQBCgYBOgSIAAAAQgFAPAAAlQAAAnACAMIABABQhpAchbAlQhyAwhCAiQgyAbggAXQgqAegbAiQgLAPgVAAIgDAAgAyVkjIACAAIgCABIAAgBg");
	this.shape_63.setTransform(1001.3,593.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#373535").ss(6,1,1).p("AonQ8QhHg3gshQQgthRgHhaQAdAhAmASQApAUAngEQArgCAgghQAhghgDgpQgBgggbgjQgMgPgpgoQh6h7gmixQgnizA7igQAHAIALARQAMATAGAJQAlAvBEAFQBCAFA0gkQAwgiAdg6QAbg2AGhBQAGg1gHhGQgCgZgNhiQgJhKAAgxQgBhFAQg1QAbhcBThaQAvCIBNgDQAogDArgrQCAiCA2j7QBZCCArCaQArCZgKCdQgDA8AAADQgBAlAFAbQAGAhASAaQAUAcAcAMQAsARAzgcQArgZAggxQAhB3AOA8QAYBkAGBSQARDOhPCXQgSAggIARQgQAegGAVQgHAdAGAbQAGAdAUARQAfAZAugOQApgNAegjQATCug5CqQg5Cqh3B/");
	this.shape_64.setTransform(991.8,485.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#373535").ss(10,1,1).p("EgQzAmeQiNg+hpiFQhih7gzihQgtiLgOiuQgLiEAGi+QBKBfBHAvQBdA8BVgbQBWgcAlhsQAdhWgGh3QgHhxgokXQgkj5gCiQQgDjYA+iyQBGjICRh1QgYBAA+A2QA9A0BHgRQA/gRAvg9QAog0AWhLQAhh0gKibQgFhPggjEQgfjFgJiKQgMi3AUiZQAXiwBCiUQBJihB2hvQgQB2AtBoQAxByBlAdQBlAeBihGQBghCAihtQAdhdgJh6QgGhMgeiNQEFEQCLFpQCMFpgMF6QgGC7gyEAQgLA7ABAhQABA0AZAfQAnAxBIgOQBGgNAlg4QAfgvAJhIQAFgtgEhVQD9GFBDGkQBLHRi0F1QgrBYgFAMQgYA7AAAwQgCA5AkAvQAnAxA1gCQBAgEAjhLQAcg7AEhXQCwE9AUF1QAUF2iNFP");
	this.shape_65.setTransform(987.8,370.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#373535").s().p("EAhJAEiQgSgGgNgRIgwg3Qhyh4izhUQiQhCjFgxIgXgGIAAgCQAEgQAJgYQALgeADgLIAEgMQBHARBCAUQGoCDDIEBQAMAPgHAWQgHAVgQAKQgMAHgMAAQgHAAgHgCgEghWACYQgWgBgOgOQgPgPABgUQABgTANgQQAZggAwgjQBGg0B2g2QB2g2BNgaQBGgZBTgTQABAgANAdIANAfIACAEQiAAfhsAsQhyAwhCAiQgyAbggAXQgqAegbAiQgLAPgVAAIgDAAgAyVkjIACAAIgCABIAAgBg");
	this.shape_66.setTransform(1001.3,594);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#373535").ss(6,1,1).p("AowJQQhPgqg2hKQg3hLgPhYQA7AIA2ACQAfACARgDQAagEAQgMQATgPAIgaQAHgXgDgaQgCgUgJgdQgLgfgEgQQgcheAWhiQAOhDAngXQAGA1AdAsQAeAtAtAUQAwAVA2gLQA3gLAcgrQAuhFgqiDQgahVgDgOQgNg6AKgrQAKguAmgtQAXgdA0gvQgNBLA6BRQAqA6AsAQQA4ASA2gmQA2gmABg6QAsA8ANBNQANBNgUBIQgIAagTAzQgPAtgBAhQgBA3AnAqQAnAtA1gBQAhAAAfgTQAegSAUgeQAfgnAYhUQAfBRAIAtQAMBIgZA2QgNAYgHALQgLAWgCARQgEAZAQAZQAPAYAZALQAXALAcAAQAaAAAbgJQA9g+AZhYQAPAEAKAYQAWAzgDA9QgCA5gVA5QgRAxghA3QgZAogpA4");
	this.shape_67.setTransform(992.8,535.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#373535").ss(10,1,1).p("AxrWYQglANgrgXQgigTghgoQinjGggktQgckEBJkpQAwBjAvA1QBCBJBOAAQBAABA4gyQAygsAbhEQAlhZAIiiQAKjAAOg/QAYhmA5haQA5hbBTg/QgvBAAkBVQAkBTBPAZQBLAYBSgiQBMgfA0hDQAvg7AbhUQAWhBANheQAAgEAZjgQAPiJAYhYQAfh5A8haQBDhnBggxQgqBPgBBcQgBBcAoBQQAeA9A3AhQA8AlA2gZQAtgUAVg6QAQgpAFhFQCpCZAzDsQAyDrhaDRQgLAbgaA3QgVAxgFAkQgHAvAPArQASAvAlASQAkASArgLQApgKAegeQAbgaAUgoQAPgeAPgvQB5BoBHCRQBHCTAHCgQAEBTAKAlQASBAAwASQAdAMAigKQAggJAagYQAVgVATgeQANgWARglQBGBDAiBzQAYBRALCFQARDQgaCOQgiC9hvBt");
	this.shape_68.setTransform(993.6,471.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#373535").s().p("AdiCaQgYgTgbgSQh6hPing0QhQgbhogYIADgRQACgPAHgSIAKgWIABgEQCaAkBwArQCiA9ByBWQANALAFAOQAFAPgJAPQgIANgRAFQgGACgGAAQgKAAgIgGgA+QA2QgcgcAcgaQAbgXAmgVQBGgnBfghQA7gUBVgXIALANIAVAZIAaAeQgkAJgiAKQhtAhg/AYQguARgYAMQgnAUgYAWQgOANgNAAQgPAAgPgPg");
	this.shape_69.setTransform(1002.6,600.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#373535").ss(6,1,1).p("AqRJGQhKgog0hHQg0hGgQhTQBNApA6ADQAlACAhgOQAjgOAUgcQAigugOhLQgEgagNgjQgPgngHgUQgfhYABhSQABhfAshEQgFA+AcA6QAdA7A0AjQAeATAfAGQAiAHAdgLQAogSAbg1QAUgnAGguQAFgsgJgsQgDgLgLgkQgIgdgDgTQgJg6AfghQAOAuAlAjQAkAkAvAOQAuANAxgKQAygLAjgfQAsgkAZhAQAUgxAKhIQA2BOAVBjQAUBfgLBjQgLBhAAATQAABCAgAlQAdAjAzAIQAwAIAtgTQBOghAyhkQArBdg2CGQgOAhgDAMQgIAZADAVQAEAhAdAaQAaAXAlANQBDAWBFgUQBJgWAgg7QAaBZgqBmQgRAogdAuQgSAcglA1");
	this.shape_70.setTransform(996.7,534.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#373535").ss(10,1,1).p("AyiT2Qjvj6g/lnQg/lmCMk7QALAzAbArQAcAuAqAaQAsAcA1ABQA3AAAngeQAfgZAWgqQAQghAMgxQANgxAfifQAaiDAZhNQAmhtA/hPQBIhbBfgkQgXBGAeBJQAdBIBBAjQBBAjBNgRQBOgQAtg6QBFhagUiiQgPhYgHgsQgOhOACg1QAChIAdg6QAghBA5gaQgRBgBEBVQBFBVBfADQBjACBKhQQBKhQgMhiQBjA7BCBhQBBBjAPBxQAMBUgQB9QgJBFgTCMQgKB1AbBeQAeBwBOA7QAgAYAkAKQAnAKAigKQA9gTAdhLQAVg1AFhZQApAeAdA1QAXAqATA9QAKAjASBFQASA/ATApQAZA2AmAlQAqApAzAKQA4ANAzgfQA1ghAEg2QCWEDgTE7QgUE7i1Dv");
	this.shape_71.setTransform(992.5,489.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#373535").ss(7,1,1).p("AAAhfIAAC/");
	this.shape_72.setTransform(1140.1,607.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#373535").ss(8,1,1).p("AAdgTIg5Ao");
	this.shape_73.setTransform(1147.8,582.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#373535").s().p("EAhJAEiQgSgGgNgRIgwg3Qhyh4izhUQiNhBjBgwQACgOAAgRIAAgJIADgJIAIgeIAHgTQA9APA5ARQGoCDDIEBQAMAPgHAWQgHAVgQAKQgMAHgMAAQgHAAgHgCgEghWACYQgWgBgOgOQgPgPABgUQABgTANgQQAZggAwgjQBGg0B2g2QB2g2BNgaQBGgZBTgTQABAgANAdIANAfIACAEQiAAfhsAsQhyAwhCAiQgyAbggAXQgqAegbAiQgLAPgVAAIgDAAgAyVkjIACAAIgCABIAAgBg");
	this.shape_74.setTransform(1001.3,594);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#373535").ss(6,1,1).p("ApfKoQg6hBgfhSQgghTAAhWQAqAlAdAJQAVAHAVgCQAXgDAQgNQAXgSAGgjQAFgZgDgqIgIibQgEgzAFggQAIgrAcgYQAhAtAZAXQAlAiAnAEQA1AHAsgsQApgpANg5QAJgpgChGQgChVADgcQAFhVAohLQgCAgARAdQAQAdAdAPQAcAPAhgCQAhgDAYgUQAWgQAQgeQALgVAMgjQAkh2gLh9QBNBngLC2QgDAsgOBoQgNBfgCA1QgDBPAeAmQATAaAiALQAgALAhgIQAfgIAZgYQAZgVALgeQAhA4AMBEQALBDgLBCQgGAlgRBLQgKBBATArQAYAxA4AaQAjAQAkAAQAmABAegRQAVgMAUgYQAKgMAXghQAOgUAMAFQAJAEACAOQAPA/gFBBQgFBAgZA6");
	this.shape_75.setTransform(999.2,526.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#373535").ss(10,1,1).p("AyvX3QhtgehShXQhShWgYhuQgZhvAmhwQAnhxBXhJQAhBPBjAPQBfAOBJg2QB2hZAbjcQAHhBABiAQACiCAGg/QAWjlB4h3QAgA7ASAbQAfAuAiAdQApAfAxAKQA1ALAqgXQAygXAXg+QATgzAAhFQAAhYgViEQggjLgCgQQghkQBpicQAKA9AJAfQAOAyAXAjQAbAoArAVQAuAWAqgMQBTgYAkiNQAdh8AKifQAHhjACi8QDWDfAwGvQAMBqAID7QAIDmARB/QALBUAjA4QArBEBCAAQAogBAkgdQAfgbAVgpQAMgZASg3QASg1AOgaQBqB0AsDwQAMBCAVCJQAUB2AcBOQA8CkBwAnQBAAVBDgaQBDgaAhg7QBXBnAwB3QAzB+gBB+QAACEg7B3Qg9B7hqBI");
	this.shape_76.setTransform(995.9,461.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48,p:{x:787.3,y:682.8}},{t:this.shape_47,p:{x:1001.1}},{t:this.shape_46},{t:this.shape_45,p:{x:1001}},{t:this.shape_44},{t:this.shape_43,p:{x:819.1,y:639.7}},{t:this.shape_42,p:{x:845}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39,p:{x:965,y:662.1}},{t:this.shape_38,p:{x:1012}},{t:this.shape_37,p:{y:662.1}},{t:this.shape_36,p:{y:699.2}},{t:this.shape_35,p:{x:1132,y:656.2}},{t:this.shape_34},{t:this.shape_33,p:{x:1193.7}},{t:this.shape_32,p:{y:718.9}},{t:this.shape_31,p:{y:735.3}},{t:this.shape_30,p:{x:970.3,y:742}},{t:this.shape_29},{t:this.shape_28,p:{x:1136.2,y:733.9}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23,p:{x:1102.4,y:776.8}},{t:this.shape_22,p:{x:1173.3}},{t:this.shape_21},{t:this.shape_20,p:{x:1002.8}},{t:this.shape_19},{t:this.shape_18,p:{x:891.3,y:630.4}},{t:this.shape_17,p:{x:965,y:636.6}},{t:this.shape_16,p:{y:636.6}},{t:this.shape_15,p:{y:630.4}},{t:this.shape_14,p:{x:1185,y:623.3}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:1145.3,y:584}},{t:this.shape_10},{t:this.shape_9,p:{x:1140}},{t:this.shape_8,p:{y:609.6}},{t:this.shape_7},{t:this.shape_6,p:{x:826.1}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:1001.7,y:605.8}},{t:this.shape_2,p:{y:605.9}},{t:this.shape_1,p:{y:622.2}},{t:this.shape,p:{y:622.2}}]}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_51},{t:this.shape_55},{t:this.shape_49},{t:this.shape_48,p:{x:787.3,y:682.8}},{t:this.shape_47,p:{x:1001.1}},{t:this.shape_46},{t:this.shape_45,p:{x:1001}},{t:this.shape_44},{t:this.shape_43,p:{x:819.1,y:639.7}},{t:this.shape_42,p:{x:845}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39,p:{x:965,y:662.1}},{t:this.shape_38,p:{x:1012}},{t:this.shape_37,p:{y:662.1}},{t:this.shape_36,p:{y:699.2}},{t:this.shape_35,p:{x:1132,y:656.2}},{t:this.shape_34},{t:this.shape_33,p:{x:1193.7}},{t:this.shape_32,p:{y:718.9}},{t:this.shape_31,p:{y:735.3}},{t:this.shape_30,p:{x:970.3,y:742}},{t:this.shape_29},{t:this.shape_28,p:{x:1136.2,y:733.9}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23,p:{x:1102.4,y:776.8}},{t:this.shape_22,p:{x:1173.3}},{t:this.shape_21},{t:this.shape_20,p:{x:1002.8}},{t:this.shape_19},{t:this.shape_18,p:{x:891.3,y:630.4}},{t:this.shape_17,p:{x:965,y:636.6}},{t:this.shape_16,p:{y:636.6}},{t:this.shape_15,p:{y:630.4}},{t:this.shape_14,p:{x:1185,y:623.3}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:1145.3,y:584}},{t:this.shape_10},{t:this.shape_9,p:{x:1140}},{t:this.shape_8,p:{y:609.6}},{t:this.shape_7},{t:this.shape_6,p:{x:826.1}},{t:this.shape_54},{t:this.shape_4},{t:this.shape_3,p:{x:1001.7,y:605.8}},{t:this.shape_2,p:{y:605.9}},{t:this.shape_1,p:{y:622.2}},{t:this.shape,p:{y:622.2}}]},1).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_51},{t:this.shape_59},{t:this.shape_49},{t:this.shape_48,p:{x:787.3,y:682.8}},{t:this.shape_47,p:{x:1001.1}},{t:this.shape_46},{t:this.shape_45,p:{x:1001}},{t:this.shape_44},{t:this.shape_43,p:{x:819.1,y:639.7}},{t:this.shape_42,p:{x:845}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39,p:{x:965,y:662.1}},{t:this.shape_38,p:{x:1012}},{t:this.shape_37,p:{y:662.1}},{t:this.shape_36,p:{y:699.2}},{t:this.shape_35,p:{x:1132,y:656.2}},{t:this.shape_34},{t:this.shape_33,p:{x:1193.7}},{t:this.shape_32,p:{y:718.9}},{t:this.shape_31,p:{y:735.3}},{t:this.shape_30,p:{x:970.3,y:742}},{t:this.shape_29},{t:this.shape_28,p:{x:1136.2,y:733.9}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23,p:{x:1102.4,y:776.8}},{t:this.shape_22,p:{x:1173.3}},{t:this.shape_58},{t:this.shape_20,p:{x:1002.8}},{t:this.shape_19},{t:this.shape_18,p:{x:891.3,y:630.4}},{t:this.shape_17,p:{x:965,y:636.6}},{t:this.shape_16,p:{y:636.6}},{t:this.shape_15,p:{y:630.4}},{t:this.shape_14,p:{x:1185,y:623.3}},{t:this.shape_13},{t:this.shape_11,p:{x:1145.3,y:584}},{t:this.shape_10},{t:this.shape_9,p:{x:1140}},{t:this.shape_8,p:{y:609.6}},{t:this.shape_6,p:{x:826.1}},{t:this.shape_54},{t:this.shape_4},{t:this.shape_3,p:{x:1001.7,y:605.8}},{t:this.shape_2,p:{y:605.9}},{t:this.shape_1,p:{y:622.2}},{t:this.shape,p:{y:622.2}}]},1).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_51},{t:this.shape_63},{t:this.shape_49},{t:this.shape_48,p:{x:787.3,y:682.8}},{t:this.shape_47,p:{x:1001.1}},{t:this.shape_46},{t:this.shape_45,p:{x:1001}},{t:this.shape_44},{t:this.shape_43,p:{x:819.1,y:639.7}},{t:this.shape_42,p:{x:845}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39,p:{x:965,y:662.1}},{t:this.shape_38,p:{x:1012}},{t:this.shape_37,p:{y:662.1}},{t:this.shape_36,p:{y:699.2}},{t:this.shape_35,p:{x:1132,y:656.2}},{t:this.shape_34},{t:this.shape_33,p:{x:1193.7}},{t:this.shape_32,p:{y:718.9}},{t:this.shape_31,p:{y:735.3}},{t:this.shape_30,p:{x:970.3,y:742}},{t:this.shape_29},{t:this.shape_28,p:{x:1136.2,y:733.9}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23,p:{x:1102.4,y:776.8}},{t:this.shape_22,p:{x:1173.3}},{t:this.shape_62},{t:this.shape_20,p:{x:1002.8}},{t:this.shape_19},{t:this.shape_18,p:{x:891.3,y:630.4}},{t:this.shape_17,p:{x:965,y:636.6}},{t:this.shape_16,p:{y:636.6}},{t:this.shape_15,p:{y:630.4}},{t:this.shape_14,p:{x:1185,y:623.3}},{t:this.shape_13},{t:this.shape_11,p:{x:1145.3,y:584}},{t:this.shape_10},{t:this.shape_9,p:{x:1140}},{t:this.shape_8,p:{y:609.6}},{t:this.shape_6,p:{x:826.1}},{t:this.shape_54},{t:this.shape_4},{t:this.shape_3,p:{x:1001.7,y:605.8}},{t:this.shape_2,p:{y:605.9}},{t:this.shape_1,p:{y:622.2}},{t:this.shape,p:{y:622.2}}]},1).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_51},{t:this.shape_66},{t:this.shape_49},{t:this.shape_48,p:{x:787.4,y:682.9}},{t:this.shape_47,p:{x:1001.2}},{t:this.shape_46},{t:this.shape_45,p:{x:1001.1}},{t:this.shape_44},{t:this.shape_43,p:{x:819.2,y:639.8}},{t:this.shape_42,p:{x:845.1}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39,p:{x:965.1,y:662.2}},{t:this.shape_38,p:{x:1012.1}},{t:this.shape_37,p:{y:662.2}},{t:this.shape_36,p:{y:699.3}},{t:this.shape_35,p:{x:1132.1,y:656.3}},{t:this.shape_34},{t:this.shape_33,p:{x:1193.8}},{t:this.shape_32,p:{y:719}},{t:this.shape_31,p:{y:735.4}},{t:this.shape_30,p:{x:970.4,y:742.1}},{t:this.shape_29},{t:this.shape_28,p:{x:1136.3,y:734}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23,p:{x:1102.5,y:776.9}},{t:this.shape_22,p:{x:1173.4}},{t:this.shape_58},{t:this.shape_20,p:{x:1002.9}},{t:this.shape_19},{t:this.shape_18,p:{x:891.4,y:630.5}},{t:this.shape_17,p:{x:965.1,y:636.7}},{t:this.shape_16,p:{y:636.7}},{t:this.shape_15,p:{y:630.5}},{t:this.shape_14,p:{x:1185.1,y:623.4}},{t:this.shape_13},{t:this.shape_11,p:{x:1145.4,y:584.1}},{t:this.shape_10},{t:this.shape_9,p:{x:1140.1}},{t:this.shape_8,p:{y:609.7}},{t:this.shape_6,p:{x:826.2}},{t:this.shape_54},{t:this.shape_4},{t:this.shape_3,p:{x:1001.8,y:605.9}},{t:this.shape_2,p:{y:606}},{t:this.shape_1,p:{y:622.3}},{t:this.shape,p:{y:622.3}}]},1).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_51},{t:this.shape_66},{t:this.shape_49},{t:this.shape_48,p:{x:787.4,y:682.9}},{t:this.shape_47,p:{x:1001.2}},{t:this.shape_46},{t:this.shape_45,p:{x:1001.1}},{t:this.shape_44},{t:this.shape_43,p:{x:819.2,y:639.8}},{t:this.shape_42,p:{x:845.1}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39,p:{x:965.1,y:662.2}},{t:this.shape_38,p:{x:1012.1}},{t:this.shape_37,p:{y:662.2}},{t:this.shape_36,p:{y:699.3}},{t:this.shape_35,p:{x:1132.1,y:656.3}},{t:this.shape_34},{t:this.shape_33,p:{x:1193.8}},{t:this.shape_32,p:{y:719}},{t:this.shape_31,p:{y:735.4}},{t:this.shape_30,p:{x:970.4,y:742.1}},{t:this.shape_29},{t:this.shape_28,p:{x:1136.3,y:734}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23,p:{x:1102.5,y:776.9}},{t:this.shape_22,p:{x:1173.4}},{t:this.shape_69},{t:this.shape_20,p:{x:1002.9}},{t:this.shape_19},{t:this.shape_18,p:{x:891.4,y:630.5}},{t:this.shape_17,p:{x:965.1,y:636.7}},{t:this.shape_16,p:{y:636.7}},{t:this.shape_15,p:{y:630.5}},{t:this.shape_14,p:{x:1185.1,y:623.4}},{t:this.shape_13},{t:this.shape_11,p:{x:1145.4,y:584.1}},{t:this.shape_10},{t:this.shape_9,p:{x:1140.1}},{t:this.shape_8,p:{y:609.7}},{t:this.shape_6,p:{x:826.2}},{t:this.shape_54},{t:this.shape_4},{t:this.shape_3,p:{x:1001.8,y:605.9}},{t:this.shape_2,p:{y:606}},{t:this.shape_1,p:{y:622.3}},{t:this.shape,p:{y:622.3}}]},1).to({state:[{t:this.shape_76},{t:this.shape_75},{t:this.shape_51},{t:this.shape_74},{t:this.shape_49},{t:this.shape_48,p:{x:787.4,y:682.9}},{t:this.shape_47,p:{x:1001.2}},{t:this.shape_46},{t:this.shape_45,p:{x:1001.1}},{t:this.shape_44},{t:this.shape_43,p:{x:819.2,y:639.8}},{t:this.shape_42,p:{x:845.1}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39,p:{x:965.1,y:662.2}},{t:this.shape_38,p:{x:1012.1}},{t:this.shape_37,p:{y:662.2}},{t:this.shape_36,p:{y:699.3}},{t:this.shape_35,p:{x:1132.1,y:656.3}},{t:this.shape_34},{t:this.shape_33,p:{x:1193.8}},{t:this.shape_32,p:{y:719}},{t:this.shape_31,p:{y:735.4}},{t:this.shape_30,p:{x:970.4,y:742.1}},{t:this.shape_29},{t:this.shape_28,p:{x:1136.3,y:734}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23,p:{x:1102.5,y:776.9}},{t:this.shape_22,p:{x:1173.4}},{t:this.shape_69},{t:this.shape_20,p:{x:1002.9}},{t:this.shape_19},{t:this.shape_18,p:{x:891.4,y:630.5}},{t:this.shape_17,p:{x:965.1,y:636.7}},{t:this.shape_16,p:{y:636.7}},{t:this.shape_15,p:{y:630.5}},{t:this.shape_14,p:{x:1185.1,y:623.4}},{t:this.shape_13},{t:this.shape_73},{t:this.shape_10},{t:this.shape_72},{t:this.shape_8,p:{y:609.7}},{t:this.shape_6,p:{x:826.2}},{t:this.shape_54},{t:this.shape_4},{t:this.shape_3,p:{x:1001.8,y:605.9}},{t:this.shape_2,p:{y:606}},{t:this.shape_1,p:{y:622.3}},{t:this.shape,p:{y:622.3}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1781.7,1025,439,280.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;