<template>
    <h4 class="text-3xl mb-8">SGML (Standard Generalized Markup Language) - HTML의 근본</h4>
    <div class="text-xl mb-8">
        <p>먼저 처음에 HTML이 생겨나게 된 목적은 하나이다.</p>
        <p>웹페이지의 컨텐츠들을 다양한 환경(브라우저)에서 열람을 해도 동일하게 볼 수 있도록 하나의 표현 언어를 생성할 필요성이 생겨난 것이다.</p>
    </div>
    <div class="text-xl mb-8">
        <p>그 약속된 언어의 표현을 정의하려다 보니 이미 존재하는 SGML이라는 것이 눈에 띄었다.</p>
        <p>
            <span class="italic text-[#1ABC9C]">SGML(Standard Generalized Markup Language) 이라는 것은 문서용 마크업 언어를 정의하기 위한 메타언어</span> 이다.
        </p>
        <p>즉, 웹페이지가 아니라 전반적인 모든 문서들을 표현하기에는 알맞는 언어이다.</p>
    </div>
    <div class="text-xl mb-32">
        <p>당시 웹페이지는 지금의 화려한 웹 페이지와는 달리 텍스트정보와 간단한 이미지가 결합된 형태로 정보를 제공하는 것이 그 목적이었으므로 그 사용 용도가 조금은 심플했다.</p>
        <p>따라서 이런 언어들은 이런 언어들을 표현하기에 알맞는
            <span class="italic text-[#1ABC9C]">SGML 이라는 언어를 가져와서 그것을 웹에 알맞게 필요한 것만 정리한 것이 HTML 이다.</span>
        </p>
    </div>

    <h4 class="text-3xl mb-8">HTML 1.0 - HTML의 등장</h4>
    <div class="text-xl mb-32">
        <p>전 세계에 처음으로 나타난 HTML 의 버전은 HTML 1.0 이다. 이 당시에는 웹페이지 제작을 하는 사람들이 상당히 적었고, 웹을 이용하는 사람도 상당히 적었던 시기였다.</p>
        <p>따라서 표현할 수 있는 데이터도 굉장히 제한적이었다고 한다. 거의 <span class="italic text-[#1ABC9C]">텍스트 위주의 정보전달 목적</span> 으로 사용되었던 시기이다.</p>
    </div>

    <h4 class="text-3xl mb-8">W3C(Worldwide Web Consortium) - 웹 표준을 정의</h4>
    <div class="text-xl mb-32">
        <p>팀 버너스리를 중심으로 각종 기관들이 모여서 <span class="italic text-[#1ABC9C]">웹의 표준을 정의하는 국제 컨소시엄</span> 이다.</p>
        <p>처음에 등장한 HTML 도 사용자가 증가함에 따라 W3C에서 서서히 표준화를 해야할 필요성을 느끼게 되고, HTML 도 다양한 브라우저에서 공통적으로 표현할 수 있도록 하나의 표준을 정의하기에 이른다.</p>
    </div>

    <h4 class="text-3xl mb-8">HTML 2.0 ~ HTML 3.2 - 표준화를 위한 노력</h4>
    <div class="text-xl mb-8">
        <p>사람들이 웹에 몰리기 시작한다. 따라서 더 많은 정보를 표현하기를 원하고, 현재도 사용하고 있는 실용적인 태그들이 등장하기 시작한다.</p>
        <p>일반 사용자에게 다양한 브라우저가 보편화되기 시작하면서 공통적으로 태그들을 표현할 수 있도록 표준을 정의하는 것에 관심을 가지는 시기이다.</p>
    </div>
    <div class="text-xl mb-32">
        <p>당시에는 각 브라우저들이 표준화되어 있지 않아서 브라우저마다 표현되는 태그들이 각기 달랐다. 물론 아직도 IE는 표준을 따르지 않는다.</p>
        <p>따라서 표준에 관해서 더 관심을 가지는 시기가 오는 것이다.</p>
    </div>

    <h4 class="text-3xl mb-8">HTML 4.01 - HTML 의 안정기</h4>
    <div class="text-xl mb-8">
        <p>안정된 표준의 HTML 의 버전이다. 이 버전에서는 <span class="italic text-[#1ABC9C]">CSS (Cascading Style Sheet)로 디자인적인 요소를 구분</span> 하게 되고,</p>
        <p><span class="italic text-[#1ABC9C]">HTML 로는 웹페이지의 전반적인 구조만을 명시</span> 하는 것을 원칙으로 하게 된다.</p>
    </div>
    <div class="text-xl mb-32">
        <p>하지만 W3C 에서는 이제 HTML 은 다양화된 웹페이지를 모두 표현하기에 기술적인 한계에 부딛혔다고 판단하고, 더이상 HTML 을 발전시키지 않을 것을 공표하게 된다.</p>
    </div>

    <h4 class="text-3xl mb-8">XHTML 1.0 - W3C의 새로운 표준.. 그러나?</h4>
    <div class="text-xl mb-8">
        <p>근래 등장한 XML과 HTML을 합성하여 더 <span class="italic text-[#1ABC9C]">확장된 태그를 사용할 수 있으며, 문법은 정확히 지켜지지 않는다면 표현되지 않도록 문법 검사를 엄격하게 적용</span> 하였다.</p>
        <p>이 새로운 웹의 표준이 <span class="italic text-[#1ABC9C]">XHTML</span> 이다.</p>
    </div>
    <div class="text-xl mb-8">
        <p>그러나 XML(eXtensible Markup Language)은 버전과 버전사이의 <span class="italic text-[#1ABC9C]">하위 호환성을 지원하지 않아</span> 서 이전의 태그들로 작성된 것 들이 사용되지 않을 수 있다는 문제점이 있었고,</p>
        <p><span class="italic text-[#1ABC9C]">문법이 엄격하여 습득에 어려움</span> 을 느껴 하나 둘 외면하기 시작한다.</p>
    </div>
    <div class="text-xl mb-8">
        <p>따라서 일부 기업은 XHTML만 지원하도록 브라우저를 업데이트 했지만, 사람들은 오히려 HTML을 표현할 수 있는 구버전의 브라우저를 사용하기에 이른다.</p>
        <p>결국, <span class="italic text-[#1ABC9C]">흥행에 대실패</span> 한 것이다.</p>
    </div>
    <div class="text-xl mb-32">
        <p><span class="italic text-[#1ABC9C]">* XML(Extensible Markup Language)</span> 은 W3C에서 개발된 다른 특수한 목적을 갖는 마크업 언어를 만드는데 사용하도록 권장하는 다목적 마크업 언어이다.</p>
        <p>XML은 SGML의 단순화된 부분집합으로, 다른 많은 종류의 데이터를 기술하는 데 사용할 수 있다. </p>
        <p>XML은 주로 다른 종류의 시스템, 특히 인터넷에 연결된 시스템끼리 데이터를 쉽게 주고 받을 수 있게 하여 HTML 의 한계를 극복할 목적으로 만들어졌다.</p>
    </div>

    <h4 class="text-3xl mb-8">HTML5 - 완전한 표준의 정착</h4>
    <div class="text-xl mb-32">
        <p>결국 W3C도 자세를 낮추고 XHTML을 표준에서 탈락시키게 되고, WHATWG에서 정의한 표준을 따르기로 한다.</p>
        <p>결론적으로 <span class="italic text-[#1ABC9C]">HTML5와 CSS3가 표준으로 확정</span> 되게 되고, 지금의 HTML5 표준이 완성된 것이다.</p>
    </div>

    <h4 class="text-3xl mb-8">결론</h4>
    <div class="text-xl mb-32">
        <p>HTML이라는 언어가 표준을 찾기까지는 상당한 시간들이 걸렸었다는게 상당히 흥미롭다.</p>
        <p>지금 우리는 HTMl5라는 표준을 따라서 공부를 하면 되겠지만, 저 불확실한 표준들 사이에서 웹 프로그래머로써 근무하던 분들은 자꾸 변경되는 표준에 따라 계속 공부해야하는 어려움이 있었을 것으로 생각된다.
            이러한 정해진 표준이 있다는 것이 정말 다행이라는 것을 새삼 다시 느낀다.</p>
    </div>

    <h4 class="text-2xl mb-8">참고</h4>
    <ul class="text-sm">
        <li class="mb-1"><a href="https://ko.wikipedia.org/wiki/WHATWG">https://ko.wikipedia.org/wiki/WHATWG</a></li>
        <li class="mb-1"><a href="https://ko.wikipedia.org/wiki/HTML">https://ko.wikipedia.org/wiki/HTML</a></li>
        <li class="mb-1"><a href="https://ko.wikipedia.org/wiki/W3C">https://ko.wikipedia.org/wiki/W3C</a></li>
        <li><a href="https://ko.wikipedia.org/wiki/XML">https://ko.wikipedia.org/wiki/XML</a></li>
    </ul>
</template>

<script>
export default {
    name: "HtmlHistory"
}
</script>

<style scoped>

</style>