---
lang: zh-CN
title: shell 脚本查找文件中是否包含某关键字
description: shell 脚本 查找当前目录下所有js、html文件中，是否包含某关键字
---

###  shell 脚本查找文件中是否包含某关键字

为了保障公司的前端项目镜像发版的顺利改造，有了此需求：检测目录下所有文件中是否存在某些写死的变量。
代码如下：
```bash
#!/bin/bash

keywords=$1;
ignore_dir=('conf');
include_file=('.js','.html');

# 查找是否包含关键字
function hasKeywords(){
    file_content=`cat $1`;
    if [[ "$file_content" =~ $keywords ]];
    then
       echo $1;
       echo 'yes';
       fi
}

# 遍历需要检测的所有文件
function get_file(){
        cd $1;
        for file_name in `ls`;
        do
           cur_dir="$1/$file_name";
           if [[ -d $cur_dir && ! ${ignore_dir[@]} =~ "$file_name" ]];
           then 
            get_file $cur_dir;
           elif [ -f $cur_dir ];
           then 
            file_type=${file_name##*.}
            if [[ ${include_file[@]} =~ "$file_type" ]];
            then 
            #  echo $cur_dir;
             hasKeywords $cur_dir;
             fi;
           fi;
        done;
}

get_file $PWD
```

### 测试方式：
```bash
./[filename].sh keywords
# 传入正则
./[filename].sh "https://(www|admin)"
```