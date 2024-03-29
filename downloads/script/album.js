function load() {
    let imgInfo = [
        { imgSrc: '/images/picture/0078.jpeg', },
        { imgSrc: '/images/picture/realisric.jpeg', },
        { imgSrc: '/images/picture/lucy.jpeg', },
        { imgSrc: '/images/picture/niji.jpeg', },
        { imgSrc: '/images/picture/zoe.png', },
        { imgSrc: '/images/picture/angel_girl.png', },
        { imgSrc: '/images/picture/angel2.png', },
        { imgSrc: '/images/picture/gray_girl.png', },
        { imgSrc: '/images/picture/build.png', },
        { imgSrc: '/images/picture/spider.jpeg', },
        { imgSrc: '/images/picture/redcar.jpeg', },
        { imgSrc: '/images/picture/cat.jpeg', },
        { imgSrc: '/images/picture/jinkesi.jpeg', },
        { imgSrc: '/images/picture/plant.jpeg', },
        { imgSrc: '/images/picture/Cthulhu.jpeg', },
        { imgSrc: '/images/picture/machina.jpeg', },
        { imgSrc: '/images/picture/001.jpeg', },
        { imgSrc: '/images/picture/002.jpeg', },
        { imgSrc: '/images/picture/003.jpeg', },
        { imgSrc: '/images/picture/004.jpeg', },
        { imgSrc: '/images/picture/005.jpeg', },
        { imgSrc: '/images/picture/006.jpeg', },
        { imgSrc: '/images/picture/007.jpeg', },
        { imgSrc: '/images/picture/008.jpeg', },
        { imgSrc: '/images/picture/009.jpeg', },
        { imgSrc: '/images/picture/010.jpeg', },
        { imgSrc: '/images/picture/011.jpeg', },
        { imgSrc: '/images/picture/012.jpeg', },
        { imgSrc: '/images/picture/013.jpeg', },
        { imgSrc: '/images/picture/014.jpeg', },
        { imgSrc: '/images/picture/015.jpeg', },
        { imgSrc: '/images/picture/016.jpeg', },
        { imgSrc: '/images/picture/017.jpeg', },
        { imgSrc: '/images/picture/018.jpeg', },
        { imgSrc: '/images/picture/019.jpeg', },
        { imgSrc: '/images/picture/020.jpeg', },
        { imgSrc: '/images/picture/021.jpeg', },
        { imgSrc: '/images/picture/022.jpeg', },
        { imgSrc: '/images/picture/023.jpeg', },
        { imgSrc: '/images/picture/west-world.jpeg', },
        { imgSrc: '/images/picture/UniverseStable.jpeg', },
    ];
    function random(arr) {
        // 进行 循环遍历数组元素  
        for (let i = 0; i < arr.length; i++) {
            // 生成一个随机数  * 数组的长度 
            let rand = parseInt(Math.random() * arr.length);
            //  进行交换
            //  变量保存数组的随机下标的一个元素
            let sum = arr[rand];
            //  再将原数组下标的元素 赋值 给 新数组随机下标的元素 
            arr[rand] = arr[i];
            // 随机下标的元素 赋值 到袁数组中
            arr[i] = sum;
        }
        return arr;
    }
    imgInfo = random(imgInfo);
    let renderDOM = null;
    // 最终渲染节点
    renderDOM = document.querySelector('.photo-album');
    function getRenderDOM() {
        setTimeout(() => {
            renderDOM = document.querySelector('.photo-album');
            if (!renderDOM) {
                getRenderDOM();
            } else {
                resize();
            }
        }, 100);
    }
    let prevMode = 1;

    // 获取内部 HTML，即每个图片的容器
    const getInnerHTML = (item) => {
        return item.imgSrc ? `
            <div class="photo-container">
                <!-- 平时显示的部分 -->
                <div class="show">
                    <!-- hover 后显示的部分 -->
                        <!-- 右下 - 下载按钮 -->
                        <div class="svg-container download">
                            <svg class="svg" t="1673083589533" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2098" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M952.8 668.48a40.16 40.16 0 0 0-39.2 39.2c0 86.24-57.6 156.96-130.88 156.96H241.28C168 864 110.4 793.92 110.4 707.68a40.16 40.16 0 0 0-39.2-39.2A40.16 40.16 0 0 0 32 707.68c0 130.72 94.24 235.36 209.28 235.36h541.44C897.76 943.04 992 838.4 992 707.68a40.16 40.16 0 0 0-39.2-39.2z" fill="#4592D8" p-id="2099"></path><path d="M484.48 686.72a45.12 45.12 0 0 0 57.6 0l149.12-149.12a38.88 38.88 0 0 0-54.88-54.88l-81.12 81.12V119.04a39.36 39.36 0 0 0-78.56 0v444.8l-81.12-81.12a38.88 38.88 0 0 0-54.88 54.88z" fill="#4592D8" p-id="2100"></path></svg>
                        </div>
                    <img class="scenery" src="${item.imgSrc}" alt="scenery">
                </div>
            </div>
        ` : '';
    };

    // func: 滚动查找元素并将 String 累计起来，最终渲染到 renderDOM 节点上
    const reduceDOM = (limit) => {
        // 生成 limit 条字符串
        const htmlString = Array.from(Array(limit), () => '');
        // 遍历并将 <img/> 添加到每一列上
        imgInfo.forEach((item, index) => {
            const surplus = index % limit;
            if (surplus < limit) {
                htmlString[surplus] += getInnerHTML(item);
            }
        });
        // 渲染到 HTML 上。记得处理下数组，要不然会产生逗号
        renderDOM.innerHTML = htmlString.join('');

        // 绑定所有下载节点
        const downloads = document.querySelectorAll('.download');
        // 点击下载图片
        downloads.forEach((download, index) => {
            download.onclick = () => {
                // 发起 xhr 请求，下载对应图片
                const req = new XMLHttpRequest();
                const img = document.querySelectorAll('.scenery')[index];
                req.open('GET', img.src, true);
                req.responseType = 'blob';
                // 加载完毕之后，创建 <a> 标签，并点击该 <a> 标签进行下载，绕开同源问题
                req.onload = () => {
                    const url = window.URL.createObjectURL(req.response);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = '';
                    a.click();
                };
                req.send();
            };
        });
        const images = document.querySelectorAll('.scenery');
        images.forEach(img => {
            img.onclick = () => {
                previewImgDialog.showModal();
                previewImg.src = img.src;
            }
        });
        previewImg.onclick = (e) => {
            e.preventDefault();
        };
        closeSvg.onclick = () => {
            previewImgDialog.close();
        };
    };

    // func: 重排节点
    const resize = () => {
        const width = window.innerWidth;
        // 超过 1000px 显示 3 列，否则显示 2 列
        if (width >= 1000 && prevMode !== 3) {
            prevMode = 3;
            reduceDOM(prevMode);
        } else if (width < 1000 && prevMode !== 2) {
            prevMode = 2;
            reduceDOM(prevMode);
        }
    };

    // 每次拖拽，判断是否需要重新渲染
    window.onresize = () => {
        resize();
    };

    if (!renderDOM) {
        getRenderDOM();
    } else {
        resize();
    }
}
load();
