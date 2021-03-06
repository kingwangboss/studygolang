// 引入 gulp 及组件
var gulp=require('gulp'),  // gulp 基础库
    minifycss=require('gulp-minify-css'),   // css压缩
    concat=require('gulp-concat'),   // 合并文件
    uglify=require('gulp-uglify'),   // js压缩
    rename=require('gulp-rename'),   // 文件重命名
    jshint=require('gulp-jshint'),   // js检查
    notify=require('gulp-notify');   // 提示

gulp.task('default', function() {
    gulp.start('minifycss', 'minifyjs');
});

// css 处理
gulp.task('minifycss', function() {
    gulp.src('static/css/*.css')      // 设置 css
        .pipe(concat('sg_styles.css'))      // 合并 css 文件到 "sg_styles.css"
        .pipe(gulp.dest('static/dist/css'))           // 设置输出路径
        .pipe(rename({suffix:'.min'}))         // 修改文件名
        .pipe(minifycss())                    // 压缩文件
        .pipe(gulp.dest('static/dist/css'))            // 输出文件目录
        .pipe(notify({message:'css task ok'}));   // 提示成功
    
    gulp.src('static/css/libs/*.css')      // 设置 css
        .pipe(concat('sg_libs.css'))      // 合并 css 文件到 "sg_libs.css"
        .pipe(gulp.dest('static/dist/css'))           // 设置输出路径
        .pipe(rename({suffix:'.min'}))         // 修改文件名
        .pipe(minifycss())                    // 压缩文件
        .pipe(gulp.dest('static/dist/css'))            // 输出文件目录
        .pipe(notify({message:'css lib task ok'}));   // 提示成功
    
    //////////// 只是压缩 ////////////////
    gulp.src('static/css/inner/*.css')      // 设置 css
        .pipe(rename({suffix:'.min'}))         // 修改文件名
        .pipe(minifycss())                    // 压缩文件
        .pipe(gulp.dest('static/dist/css'))            // 输出文件目录
        .pipe(notify({message:'css only minify task ok'}));   // 提示成功
 });

// JS 处理
gulp.task('minifyjs',function(){
    gulp.src('static/js/libs/*.js')  // 选择合并的 JS
       .pipe(concat('sg_libs.js'))   // 合并 JS
       .pipe(gulp.dest('static/dist/js'))         // 输出
       .pipe(rename({suffix:'.min'}))     // 重命名
       .pipe(uglify())                    // 压缩
       .pipe(gulp.dest('static/dist/js'))            // 输出 
       .pipe(notify({message:"js lib task ok"}));    // 提示成功
    
    gulp.src(['static/js/base/common.js', 'static/js/base/md_toolbar.js', 'static/js/base/puploader.js', 'static/js/base/upload.js', 'static/js/base/comment.js'])  // 选择合并的 JS
       .pipe(concat('sg_base.js'))   // 合并 JS
       .pipe(gulp.dest('static/dist/js'))         // 输出
       .pipe(rename({suffix:'.min'}))     // 重命名
       .pipe(uglify())                    // 压缩
       .pipe(gulp.dest('static/dist/js'))            // 输出 
       .pipe(notify({message:"js base task ok"}));    // 提示成功
    
    ///////// 只是压缩 /////////////
    gulp.src('static/js/*.js')
       .pipe(rename({suffix:'.min'}))     // 重命名
       .pipe(uglify())                    // 压缩
       .pipe(gulp.dest('static/dist/js'))            // 输出 
       .pipe(notify({message:"js only uglify task ok"}));    // 提示成功
});