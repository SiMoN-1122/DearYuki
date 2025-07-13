document.addEventListener("DOMContentLoaded", () => {
  const text = "嗨，你是怎么找到这个的？";
  const textHBD = "🎉Yuki生日快乐🎉";
  const typingElement = document.getElementById("typing-text");
  const typingElementHBD = document.getElementById("typing-text-hbd");

  let index = 0;

  // 第一段打字动画
  const interval = setInterval(() => {
    typingElement.textContent += text[index];
    index++;
    if (index === text.length) {
      clearInterval(interval);

      // 延迟后开始第二段
      setTimeout(() => {
        let j = 0;
        typingElementHBD.style.opacity = 1; // 显示出来
        typingElementHBD.classList.add("glowAndZoom"); // 添加发光动画

        const interval2 = setInterval(() => {
          typingElementHBD.textContent += textHBD[j];
          j++;
          if (j === textHBD.length) {
            clearInterval(interval2);
            typingElementHBD.classList.add("glowLoop"); // 继续发光动画

            // 让按钮渐变出现
            const enterBtn = document.getElementById("enter-btn");
            enterBtn.classList.add("show");
            }
        }, 200);
      }, 500);
    }
  }, 100);

  
  // 进入按钮逻辑
  document.getElementById("enter-btn").addEventListener("click", () => {
    document.getElementById("cover").style.display = "none";
    document.getElementById("page-container").style.display = "block";
  });
});




// 照片部分
// window.showMemory = function(id) {
//   const photos = {
//     1: {
//       src: "Resources/img/img1.jpg",
//       title: "那天你送了奶茶",
//       desc: "那天我过得很糟，你出现的时候，我几乎要哭出来。"
//     },
//     2: {
//       src: "Resources/img/img2.jpg",
//       title: "212的聚餐",
//       desc: "第一次见这么大阵仗，说是不能外传但是放在这里应该没事，实在是怀念212的日子。"
//     },
//     3: {
//       src: "Resources/img/img3.jpg",
//       title: "第一次去live house",
//       desc: "很开心，但是饿着肚子回去也太搞笑了。"
//     }
//   };

//   const memory = photos[id];
//   if (memory) {
//     document.getElementById("modal-img").src = memory.src;
//     document.getElementById("modal-title").textContent = memory.title;
//     document.getElementById("modal-desc").textContent = memory.desc;
//     document.getElementById("photo-modal").style.display = "flex";
//   }
// }

// 关闭弹窗
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("modal-close").addEventListener("click", () => {
    document.getElementById("photo-modal").style.display = "none";

    //暂停视频
    const video = document.getElementById("modal-video");
    video.pause();
    video.currentTime = 0;
  });
});

 // 媒体数据
const mediaItems = {
    1: {
        type: 'image',
        src: "Resources/img/img1.jpg",
        title: "心里暖暖的",
        desc: "那天我过得很糟，你出现的时候，我几乎要哭出来"
    },
    2: {
        type: 'image',
        src: "Resources/img/img2.jpg",
        title: "212聚餐",
        desc: "第一次见这么大阵仗，说是不能外传但是放在这里应该没事，实在是怀念212的日子"
    },
    3: {
        type: 'image',
        src: "Resources/img/img3.jpg",
        title: "第一次去live house",
        desc: "很开心，但是饿着肚子回去也太搞笑了"
    },
    4: {
        type: 'image',
        src: "Resources/img/img4.jpg",
        title: "一句歌词会绑定一段记忆",
        desc: "刚开始唱的时候你和我说，你第一次听的时候觉得这首歌的歌词好神奇。“你坐在我的右边，我也坐你的右边”，我说那不就是面对面吗，你笑着说对啊。现在发现原来是相邻荡秋千。"
    },
    5: {
        type: 'image',
        src: "Resources/img/img5.jpg",
        title: "记得这个蛋糕莫",
        desc: "在义工志愿活动的时候做的，印象很深是因为那天第一次见到你短头发的样子，实在是特别好看，请务必要焊在头上。"
    },
    6: {
        type: 'image',
        src: "Resources/img/img6.jpg",
        title: "在干什么？",
        desc: "有人的摸鱼铁证被我抓到了^ ^"
    },
    7: {
        type: 'image',
        src: "Resources/img/img7.jpg",
        title: "瑞了",
        desc: "自此爱上葡萄冰萃，凌晨实验室还有这么多人吗，有点意思。"
    },
    8: {
        type: 'image',
        src: "Resources/img/img8.jpg",
        title: "第一次在实验室通宵？？",
        desc: "天亮的时候居然是粉色的，其实是一段很幸福的经历。"
    },
    9: {
        type: 'image',
        src: "Resources/img/img9.jpg",
        title: "废品回收",
        desc: "可以玩拼图，拼拼拼，拼凑好心情<3"
    },
    10: {
        type: 'image',
        src: "Resources/img/img10.jpg",
        title: "允许小憩",
        desc: "真正的劳模一点钟还要待在实验室的"
    },
    11: {
        type: 'image',
        src: "Resources/img/img11.jpg",
        title: "小巴站",
        desc: "这么巧，你也是苦命早八人。"
    },
    12: {
        type: 'image',
        src: "Resources/img/img12.jpg",
        title: "“补药再下雨了”",
        desc: "Yuki如是说"
    },
    13: {
        type: 'image',
        src: "Resources/img/img13.jpg",
        title: "去打印竞赛文档了",
        desc: "这个恐龙十分得可爱，准备占为己有。"
    },
    14: {
        type: 'image',
        src: "Resources/img/img14.jpg",
        title: "医生怎么说",
        desc: "DOCTOR."
    },
    15: {
        type: 'image',
        src: "Resources/img/img15.jpg",
        title: "在用什么特效",
        desc: "这张很搞笑，很喜欢这一张，鲜艳而富有张力。"
    },
    16: {
        type: 'image',
        src: "Resources/img/img16.jpg",
        title: "辛巴——！",
        desc: "此处应有狮子王bgm"
    },
    17: {
        type: 'image',
        src: "Resources/img/img17.jpg",
        title: "可以喝",
        desc: "喝奶茶就像喝水一样简单而健康"
    },
    18: {
        type: 'image',
        src: "Resources/img/img18.jpg",
        title: "神秘打卡点",
        desc: "我看他们都在拍我也拍了————不愿透露姓名的街头路人"
    },
    19: {
        type: 'image',
        src: "Resources/img/img19.jpg",
        title: "文艺范",
        desc: "大当家正在物色新房"
    },
    20: {
        type: 'image',
        src: "Resources/img/img20.jpg",
        title: "可以歪头",
        desc: "⚠️⚠️⚠️神秘缆车出没🚡🚡⚠️⚠️⚠️"
    },
    21: {
        type: 'image',
        src: "Resources/img/img21.jpg",
        title: "Zzz",
        desc: "怎么又在打比赛"
    },
    22: {
        type: 'image',
        src: "Resources/img/img22.jpg",
        title: "火急火燎",
        desc: "其实不只是有一点紧张"
    },
    23: {
        type: 'image',
        src: "Resources/img/img23.jpg",
        title: "摄影师",
        desc: "热心市民李女士正在协助大合照"
    },
    24: {
        type: 'image',
        src: "Resources/img/img24.jpg",
        title: "热烈庆祝YUKI毕业",
        desc: "🌸🌻美得不像话🌼🌹🪻"
    },
    25: {
        type: 'image',
        src: "Resources/img/img25.jpg",
        title: "疯狂星期四！",
        desc: "下班能看见晚霞也是很幸福的一件事"
    },
    26: {
        type: 'image',
        src: "Resources/img/img26.jpg",
        title: "绝美",
        desc: "这张美到失语了，轻轻地放在这里"
    },
    27: {
        type: 'image',
        src: "Resources/img/img27.jpg",
        title: "热烈庆祝我毕业",
        desc: "两年后再来找你拍，期待紫袍<3"
    },

    30: {
        type: 'image',
        src: "Resources/img/img7-add.PNG",
        title: "一起摸鱼",
        desc: "是不是有人说了瑞"
    },

    31: {
        type: 'image',
        src: "Resources/img/img-livehouse.jpg",
        title: '"我们也来拍一张"',
        desc: ""
    },

    //视频项
    50: {
        type: 'video',
        src: "Resources/video/LIVEHOUSE.mp4",
        thumbnail: "Resources/video/LIVEHOUSE-thumbnail.jpg",
        title: "梦幻般的solo",
        desc: "热泪盈眶，所以我把它放在这里"
    },
    51: {
        type: 'video',
        src: "Resources/video/HuanTing.mp4",
        thumbnail: "Resources/video/HuanTing-thumbnail.jpg",
        title: "一个人的时候，偷偷看你的微博",
        desc: ""
    },
    52: {
        type: 'video',
        src: "Resources/video/HuiSeTouXiang.mp4",
        thumbnail: "Resources/video/HuiSeTouXiang-thumbnail.jpg",
        title: "打开了OICQ",
        desc: ""
    },
    53: {
        type: 'video',
        src: "Resources/video/XiangXiangZhiZhong.mp4",
        thumbnail: "Resources/video/XiangXiangZhiZhong-thumbnail.jpg",
        title: "想象中很不同",
        desc: ""
    },
    54: {
        type: 'video',
        src: "Resources/video/RuYueErZhi.mp4",
        thumbnail: "Resources/video/RuYueErZhi-thumbnail.jpg",
        title: "等到记忆只剩精华",
        desc: ""
    },
};

// 视频部分
// 显示媒体内容
function showMedia(id) {
    const media = mediaItems[id];
    if (!media) return;
    
    const modal = document.getElementById("photo-modal");
    const modalImg = document.getElementById("modal-img");
    const modalVideo = document.getElementById("modal-video");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");
    
    // 设置标题和描述
    modalTitle.textContent = media.title;
    modalDesc.textContent = media.desc;
    
    // 根据媒体类型显示不同内容
    if (media.type === 'image') {
        modalImg.style.display = 'block';
        modalImg.src = media.src;
        modalVideo.style.display = 'none';
        modalVideo.pause();
    } else if (media.type === 'video') {
        modalImg.style.display = 'none';
        modalVideo.style.display = 'block';
        modalVideo.src = media.src;
        modalVideo.play();
    }
    
    // 显示弹窗
    modal.style.display = "flex";
}

// 关闭弹窗
function closeModal() {
    const modal = document.getElementById("photo-modal");
    const modalVideo = document.getElementById("modal-video");
    
    modal.style.display = "none";
    modalVideo.pause();
}


// 点击弹窗外部关闭
window.onclick = function(event) {
    const modal = document.getElementById("photo-modal");
    if (event.target === modal) {
        closeModal();
    }
}

// 键盘快捷键
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});
