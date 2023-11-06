# 멘질멘질(MenjilMenjil)

링크: [http://menjil-menjil.com/](http://menjil-menjil.com/)
<br/><br/>

## 소개
<img width="860" alt="Untitled" src="https://github.com/Menjil-Menjil/Menjil-FE/assets/77103814/f12a915e-4246-4b52-b44a-eecfb22a1758">

https://github.com/Menjil-Menjil/Menjil-FE/assets/77103814/b5589232-3096-49ae-99b7-550064564470


### 주요 기능 소개
<img width="860" alt="%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-11-06_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_3 59 25" src="https://github.com/Menjil-Menjil/Menjil-FE/assets/77103814/2f542b66-0706-4612-b70c-48e6f8ae4314">

### 멤버
프론트엔드
- [Ye-kki](https://github.com/orgs/Menjil-Menjil/people/Ye-kki)
- [니나노래](https://github.com/orgs/Menjil-Menjil/people/ninanoray)
<br/>

백엔드
- [megymj](https://github.com/orgs/Menjil-Menjil/people/megymj)


<br/><br/>


## 기술 스택
### 프론트엔드
<img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white">


### 백엔드



<br/><br/>


## 구조
### CI/CD
<img width="860" alt="%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-11-06_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_4 03 05" src="https://github.com/Menjil-Menjil/Menjil-FE/assets/77103814/37c5ff3e-8df4-4614-88f0-ce5050c466f2">

### 인프라 구조
<img width="860" alt="%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-11-06_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_4 06 26" src="https://github.com/Menjil-Menjil/Menjil-FE/assets/77103814/3c20eb20-c2b2-4935-9695-cf7ec599dc78">


<br/><br/><br/>


## Coding Conventions

### 1. 명명규칙(Naming Conventions)

- 이름으로부터 의도가 읽을 수 있게 쓴다.
    
    ```jsx
    // bad
    function q() {
      // ...stuff...
    }
    
    // good
    function query() {
      // ..stuff..
    }
    ```
    
- 오브젝트, 함수, 그리고 인스턴스에는 `camelCase`를 사용한다.
    
    ```jsx
    // bad
    const OBJEcttsssss = {};
    const this_is_my_object = {};
    function c() {}
    
    // good
    const thisIsMyObject = {};
    function thisIsMyFunction() {}
    ```
    
- 함수 이름은 동사 + 명사 형태로 작성한다.
`postUserInformation( )`
- 약어 사용은 최대한 지양한다.
- 이름에 네 단어 이상이 들어가면 팀원과 상의를 거친 후 사용한다

### 2. 블록(Blocks)

- 복수행의 블록에는 중괄호({})를 사용한다.
    
    ```jsx
    // bad
    if (test)
      return false;
    
    // good
    if (test) return false;
    // good
    if (test) {
      return false;
    }
    
    // bad
    function() { return false; }
    
    // good
    function() {
      return false;
    }
    ```
    
- 복수행 블록의 `if` 와 `else` 를 이용하는 경우  는  블록 끝의 중괄호( } )와 같은 행에 위치시킨다.
    
    ```jsx
    // bad
    if (test) { thing1(); thing2(); }
    else { thing3(); }
    
    // good
    if (test) { thing1(); thing2(); }
    else { thing3(); }
    ```
    

### 3. 코멘트(Comments)

- 복수형의 코멘트는 `/** ... */` 를 사용한다.
    
    ```jsx
    // good
    /**
     * @param {String} tag
     * @return {Element} element
     */
    function make(tag) {
      // ...stuff...
    
      return element;
    }
    ```
    
- 단일 행의 코멘트에는 `//` 을 사용하고 코멘트를 추가하고 싶은 코드의 상부에 배치한다. 그리고 코멘트의 앞에 빈 행을 넣는다.
    
    ```jsx
    // bad
    const active = true; // is current tab
    
    // good
    // is current tab
    const active = true;
    
    // good
    function getType() { console.log('fetching type...');
    // set the default type to 'no type'
    const type = this._type || 'no type'; return type; }
    ```
    

### 4. 문자열(Strings)

- 문자열에는 싱크쿼트 `''` 를 사용한다.
    
    ```jsx
    // bad
    const name = "Capt. Janeway";
    
    // good
    const name = 'Capt. Janeway';
    ```
    
- 프로그램에서 문자열을 생성하는 경우는 문자열 연결이 아닌 `template strings`를 이용한다.
    
    ```jsx
    // bad
    function sayHi(name) { return 'How are you, ' + name + '?'; }
    // bad
    function sayHi(name) { return ['How are you, ', name, '?'].join(); }
    
    // good
    function sayHi(name) { return `How are you, ${name}?`; }
    ```
    

### 5. 함수(Functions)

- 화살표 함수를 사용한다.
    
    ```jsx
    const arr2 = [1, 2, 3];
    const pow2 = arr.map((x) => x * x);
    ```
    

### 6. 조건식과 등가식(Comparison Operators & Equality)

- `==` 이나 `!=` 보다 `===` 와 `!==` 을 사용한다.
- 단축형을 사용한다.
    
    ```jsx
    // bad
    if (name != '') {
      // ...stuff...
    }
    
    // good
    if (name name !== '') {
      // ...stuff...
    }
    ```
    
- 비동기 함수를 사용할 때 `Promise`함수의 사용은 지양하고 `async`, `await`를 쓰도록 한다


<br/><br/>


## Commit Conventions

ex) `feat(변경한 파일) : 변경 내용 (/#issue num)`

```
- feat:      새로운 기능 구현
- fix:       버그, 오류 해결
- chore:     src 또는 test 파일을 수정하지 않는 기타 변경 사항 ( 새로운 파일 생성, 파일 이동, 이름 변경 등 )
- refactor:  버그 수정이나 기능 추가가 없는 코드 변경 ( 코드 구조 변경 등의 리팩토링 )
- style:     코드의 의미에 영향을 미치지 않는 변경 사항 ( 코드 형식, 세미콜론 추가: 비즈니스 로직에 변경 없음 )
- build:    빌드 시스템 또는 외부에 영향을 미치는 변경 사항 종속성 ( 라이브러리 추가 등 )
- perf:      성능을 향상 시키기 위한 코드 변경
- test:      테스트 추가 또는 이전 테스트 수정
- docs:      README나 WIKI 등의 문서 개정
- revert:    이전 커밋을 되돌리는 경우
- ci:      CI 구성 파일 및 스크립트 변경
- Merge: 다른브렌치를 merge하는 경우
- Init : Initial commit을 하는 경우
```

