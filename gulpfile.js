const gulp = require("gulp"); 
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const minifycss = require("gulp-minify-css");
const sass = require("gulp-sass");

gulp.task("watchall",async ()=>{  //拷贝html
	gulp.watch("*.html",async ()=>{  //监听当前文件夹下的所有html文件
		gulp.src("*.html")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\THERMOS"));
	});
    gulp.watch("js/*.js",async ()=>{ //拷贝js
        gulp.src("js/*.js")
        // .pipe(uglify())
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\THERMOS\\js"));
    });
    //concat合并文件夹，并压缩，并且重命名
	gulp.watch(["js/index.js","js/jsAddress.js"],async()=>{
		gulp.src(["js/index.js","js/jsAddress.js"])
		.pipe(concat("conmon.js"))
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\THERMOS\\js"))
		// .pipe(uglify())
        .pipe(rename("common.min.js"))
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\THERMOS\\js"))
	});
	// gulp.watch("sass/**/*",async()=>{
	// 	gulp.src("sass/**/*")
	// 	.pipe(sass())
	// 	.pipe(gulp.dest("D:\\THERMOS\\css"));
	// });
	gulp.watch("sass/**/*",async()=>{
		gulp.src("sass/**/*")
		.pipe(sass())
		.pipe(minifycss())
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\THERMOS\\css"));
	});
	gulp.watch("*.php",async ()=>{  //监听当前文件夹下的所有html文件
		gulp.src("*.php")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\THERMOS"));
	});
});

//拷贝图片
gulp.task("img",async()=>{
	gulp.src("img/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\THERMOS\\img"));
});