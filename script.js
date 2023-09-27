function apires() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET','https://jkt48-showroom-api.vercel.app/api/rooms/onlives');
  xhr.send();
  xhr.onload = function() {
    if(xhr.status == 200) {
      let res = JSON.parse(this.response);
      let html = '';
      if(res.is_live == true) {
        for(let i = 0; i < res.data.length; i++) {
        document.getElementById('content').innerHTML = `
        <video poster="${res.data[i].image_square}" width="320" height="240" controls>
        <source src="${res.data[i].streaming_url_list[i].url}" type="video/mp4">
        <source src="movie.ogg" type="video/ogg">
        Your browser does not support the video.
        </video>
        `;
        }
      }
      if(res.is_live == false) {
        document.getElementById('content').innerHTML = `Tidak Ada Live!`;
      }
      console.log(res);
    }
  }
}
apires();