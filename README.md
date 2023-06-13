# Menjil-FE

## 👩‍💻 Coding Conventions

<details>
<summary>명명규칙(Naming Conventions)</summary>
<div markdown="1">

1. 이름으로부터 의도가 읽혀질 수 있게 쓴다.

- ex)

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

2. 오브젝트, 함수, 그리고 인스턴스에는 `camelCase`를 사용한다.

- ex)

  ```jsx
  // bad
  const OBJEcttsssss = {};
  const this_is_my_object = {};
  function c() {}

  // good
  const thisIsMyObject = {};
  function thisIsMyFunction() {}
  ```

3. 클래스나 constructor에는 `PascalCase`를 사용한다.

- ex)

  ```jsx
  // bad
  function user(options) {
    this.name = options.name;
  }

  const bad = new user({
    name: "nope",
  });

  // good
  class User {
    constructor(options) {
      this.name = options.name;
    }
  }

  const good = new User({
    name: "yup",
  });
  ```

4. 함수 이름은 동사 + 명사 형태로 작성한다.
   ex) `postUserInformation( )`
5. 약어 사용은 최대한 지양한다.
6. 이름에 네 단어 이상이 들어가면 팀원과 상의를 거친 후 사용한다
   </div>
   </details>

<details>
<summary>블록(Blocks)</summary>
<div markdown="1">

1. 복수행의 블록에는 중괄호({})를 사용한다.

- ex)

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

2. 복수행 블록의 `if` 와 `else` 를 이용하는 경우 `else` 는 `if` 블록 끝의 중괄호( } )와 같은 행에 위치시킨다.

- ex)
  `java // bad if (test) { thing1(); thing2(); } else { thing3(); } // good if (test) { thing1(); thing2(); } else { thing3(); }`
  </div>
  </details>

<details>
<summary>코멘트(Comments)</summary>
<div markdown="1">

1. 복수형의 코멘트는 `/** ... */` 를 사용한다.

- ex)

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

2. 단일 행의 코멘트에는 `//` 을 사용하고 코멘트를 추가하고 싶은 코드의 상부에 배치한다. 그리고 코멘트의 앞에 빈 행을 넣는다.

- ex)
  `jsx // bad const active = true; // is current tab // good // is current tab const active = true; // good function getType() { console.log('fetching type...'); // set the default type to 'no type' const type = this._type || 'no type'; return type; }`
  </div>
  </details>

<details>
<summary>문자열(Strings)</summary>
<div markdown="1">

1. 문자열에는 싱크쿼트 `''` 를 사용한다.

- ex)

  ```jsx
  // bad
  const name = "Capt. Janeway";

  // good
  const name = 'Capt. Janeway';
  ```

2. 프로그램에서 문자열을 생성하는 경우는 문자열 연결이 아닌 `template strings`를 이용한다.

- ex)
  `` jsx // bad function sayHi(name) { return 'How are you, ' + name + '?'; } // bad function sayHi(name) { return ['How are you, ', name, '?'].join(); } // good function sayHi(name) { return `How are you, ${name}?`; } ``
  </div>
  </details>

<details>
<summary>함수(Functions)</summary>
<div markdown="1">

1. 화살표 함수를 사용한다.

- ex)

  ```jsx
  var arr1 = [1, 2, 3];
  var pow1 = arr.map(function(x) {
    // ES5 Not Good
    return x * x;
  });

  const arr2 = [1, 2, 3];
  const pow2 = arr.map((x) => x * x); // ES6 Good
  ```

</div>
</details>

<details>
<summary>조건식과 등가식(Comparison Operators & Equality)</summary>
<div markdown="1">

1. `==` 이나 `!=` 보다 `===` 와 `!==` 을 사용한다.
2. 단축형을 사용한다.

- ex)

  ```jsx
  // bad
  if (name !== "") {
    // ...stuff...
  }

  // good
  if (name) {
    // ...stuff...
  }
  ```

3. 비동기 함수를 사용할 때 `Promise`함수의 사용은 지양하고 `async`, `await`를 쓰도록 한다
   </div>
   </details>
   
</br>

## 🧵 Commit Convention

<aside>
📍  git commit message convention

`ex) feat(변경한 파일) : 변경 내용 (/#issue num)`

```plain
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
