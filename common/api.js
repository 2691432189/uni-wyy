// 按需导入 $http 对象
import { $http } from '@escook/request-miniprogram'

uni.$http = $http
uni.$http.baseUrl = 'http://42.193.111.124:8889'

// 获取排行榜列表
export function getTopList () {
	var listIds = ['19723756' , '3779629' , '2884035' , '3778678' ]
	return new Promise((reslove,reject)=>{
		$http.get('/toplist/detail')
		 .then(res=>{
			 res.data.list.length=4
			 for(var i=0;i<res.data.list.length;i++){
			 		res.data.list[i].listId = listIds[i];
			 	} 
			 reslove(res.data.list)
		 })
	})
}

// 获取歌单列表
export function getMusicList (id) {
	return new Promise((reslove,reject)=>{
		$http.get('/playlist/detail?id='+id)
		 .then(res=>{
			 reslove(res.data)
		 })
	})
}

// 获取所有歌曲详情
export function getMusicDetail(id){
	return new Promise((reslove,reject)=>{
		$http.get('/song/detail?ids='+id)
		 .then(res=>{
			 reslove(res.data)
		 })
	})
}

// 获取音频地址
export function getMusicUrl(id){
	return new Promise((reslove,reject)=>{
		$http.get('/song/url?id='+id)
		 .then(res=>{
			 reslove(res.data)
		 })
	})
}

// 获取歌词
export function getMusicLyric(id){
	return new Promise((reslove,reject)=>{
		$http.get('/lyric?id='+id)
		 .then(res=>{
			 reslove(res.data)
		 })
	})
}

// 获取相似音乐
export function getMusicSimi(id){
	return new Promise((reslove,reject)=>{
		$http.get('/simi/song?id='+id)
		 .then(res=>{
			 reslove(res.data)
		 })
	})
}

// 歌曲评论
export function getMusicComment(id){
	return new Promise((reslove,reject)=>{
		$http.get('/comment/music?id='+id)
		 .then(res=>{
			 reslove(res.data)
		 })
	})
}

// 热搜列表(详细)
export function getSearchHot(){
	return new Promise((reslove,reject)=>{
		$http.get('/search/hot/detail')
		 .then(res=>{
			 reslove(res.data)
		 })
	})
}
// 搜索结果
export function getSearchWord(word){
	return new Promise((reslove,reject)=>{
		$http.get('/search?keywords='+word)
		 .then(res=>{
			 reslove(res.data)
		 })
	})
}
// 搜索建议
export function getSearchSuggest(word){
	return new Promise((reslove,reject)=>{
		$http.get('/search/suggest?keywords='+word+'&type=mobile')
		 .then(res=>{
			 reslove(res.data)
		 })
	})
}