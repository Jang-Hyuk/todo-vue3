<template>
	<div>
		<input type="text" />
		<br />
		<div
			id="wtf"
			ref="wtf"
			contenteditable
			:value="cText"
			@keyup="onInputContenteditable"
			@input="help"
			style="background-color: antiquewhite; height: 500px"
		></div>

		<textarea :value="tText" @keyup="onInputTextarea">
			여기야
		 </textarea
		>
	</div>
</template>

<script>
import _ from 'lodash';
export default {
	data() {
		return {
			cText: '',
			tText: '',
		};
	},
	mounted() {
		this.$refs.wtf.addEventListener('paste', e => {
			// e.preventDefault();
			console.log('복사 붙여넣기 방지', e.clipboardData.getData('text/plain'));
			const getText = e.clipboardData.getData('text/plain');

			const selection = document.getSelection();
			const range = selection.getRangeAt(0);
			const start = range.startOffset; // 텍스트 선택 시작 위치
			const end = range.endOffset; // 텍스트 선택 마지막 위치

			const text = this.$refs.wtf.textContent;
			console.log('🚀 ~ file: TodoHeader.vue:43 ~ text:', text);
			const before = text.slice(0, start);
			const after = text.slice(end);
			this.$refs.wtf.innerHTML = before + getText + end;
			e.preventDefault();
			// clipboard event
			console.log('🚀 ~ file: TodoHeader.vue:35 ~ text:', text);
			// console.log('🚀 ~ file: TodoHeader.vue:35 ~ e:', e);
		});

		/* 드롭 대상에서 발생하는 이벤트 */
		this.$refs.wtf.addEventListener(
			'dragover',
			event => {
				// console.log('드래그앤드롭 방지', event);
				// 드롭을 허용하기 위해 기본 동작 취소
				event.preventDefault();
			},
			false,
		);
	},
	methods: {
		/**
		 * Description
		 * @param {KeyboardEvent} e
		 * @returns {any}
		 */
		onInputContenteditable(e) {
			console.info(e.target.textContent);
			// console.log('🚀 ~ file: TodoHeader.vue:29 ~ e:', e);
			const contents = this.extractBetweenStrings(
				e.target.innerHTML,
				'<div>',
				'</div>',
			);
			// console.log('🚀 ~ file: TodoHeader.vue:39 ~ contents:', contents);

			this.tText = e.target.innerHTML.replaceAll('<br/>', '\n');
		},

		/**
		 *
		 * @param {KeyboardEvent} e
		 */
		onInputTextarea(e) {
			// console.log('🚀 ~ file: TodoHeader.vue:43 ~ e:', e);
			this.tText = e.target.value;
			this.cText = e.target.value;
			this.$refs.wtf.innerHTML = this.cText.replace(/\n/g, '<br/>');
			console.log('🚀 ~ file: TodoHeader.vue:46 ~ this.cText:', this.cText);
			console.log('🚀 ~ file: TodoHeader.vue:49 ~ this.$refs.wtf:', this.$refs.wtf);
		},

		/**
		 * 특정 문자열 사이의 문자열 추출
		 * @param {string} str 추출할 대상이 되는 문자열
		 * @param {string} sDelimiter 특정 문자열 시작 구분자
		 * @param {string} eDelimiter 특정 문자열 종료 구분자
		 * @param {{shouldTrim: boolean, shouldLowerCase: boolean, shouldUppercase: boolean}} [option] 추가적인 정제처리 여부.
		 * @returns {string[]} 추출한 문자열 목록
		 * @example
		 * extractBetweenStrings('01234567', '23', '56'): ['45']
		 * extractBetweenStrings('hi #a# 여긴 무시  # b# end', '#', '#'): ['a', 'b']
		 */
		extractBetweenStrings(str, sDelimiter, eDelimiter, option = {}) {
			const startRegex = new RegExp(`(${sDelimiter}).*?(${eDelimiter})`, 'g');
			const startReplacer = new RegExp(sDelimiter);
			const endReplacer = new RegExp(eDelimiter);

			const {
				shouldTrim = true,
				shouldLowerCase = false,
				shouldUppercase = false,
			} = option;

			let results = str.match(startRegex);
			results =
				results === null
					? []
					: results.map(s =>
							s.replace(startReplacer, '').replace(endReplacer, ''),
					  );

			const commnadList = [];

			shouldTrim && commnadList.push(_.trim);
			shouldLowerCase && commnadList.push(_.toLower);
			shouldUppercase && commnadList.push(_.toUpper);

			if (commnadList.length) {
				const flowCommand = _.flow(commnadList);
				results = results.map(flowCommand);
			}
			// console.log('🚀 ~ file: BaseUtil.js:41 ~ results', results);
			return results;
		},

		help(event) {
			// console.log('🚀 ~ file: TodoHeader.vue:107 ~ event:', event);
			// console.log('help!');
		},
	},
};
</script>

<style lang="scss" scoped></style>
