window.onload = function() {
	const inputEl:any = document.getElementById('J-search-input');
	const btnEl:any = document.getElementById('J-search-btn');
	const moveEl:any = document.getElementById('J-move-block');

	// 去抖
	const ajax = (event:any) => {
		console.log(`HTTP异步请求：${inputEl.value}`);
	}

	const debounce = (func:any, delay:number = 1000) => {
		let timer:any = null;
		return (args:any) => {
			clearTimeout(timer);
			timer = setTimeout(() => {
				func()
			}, delay)
		}
	}

	inputEl.oninput = debounce(ajax);
	btnEl.onclick = debounce(ajax);


	// 节流
	let count:number = 0;
	const handler = (event:any) => {
		count++;
		moveEl.innerHTML = `鼠标移入了${count}次`;
	}

	const throttle = (func:any, delay:number = 1000) => {
		let initDate = new Date().getTime();
		return () => {
			let nowDate = new Date().getTime();
			if(nowDate - initDate >= delay) {
				func();
				initDate = nowDate;
			}
		}
	}

	moveEl.onmouseenter = throttle(handler);
}