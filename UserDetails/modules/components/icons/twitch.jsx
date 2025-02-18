export default props => <svg width="20" height="20" viewBox="0 0 128 128" {...props}>
    <defs>
        <path id="color-a" d="M8.5542826,0 L0,22 L0,111.8 L30.7954173,111.8 L30.7954173,128 L48.1052598,128 L64.408716,111.8 L89.3670935,111.8 L122.980392,78.4 L122.980392,0 L8.5542826,0 Z M111.406951,72.6 L92.0843362,91.8 L61.2889188,91.8 L44.9854626,108 L44.9854626,91.8 L19.020699,91.8 L19.020699,11.4 L111.406951,11.4 L111.406951,72.6 Z M92.2856134,33.4 L92.2856134,66.8 L80.8128109,66.8 L80.8128109,33.4 L92.2856134,33.4 Z M61.4901961,33.4 L61.4901961,66.8 L50.0173935,66.8 L50.0173935,33.4 L61.4901961,33.4 Z" />
    </defs>
    <g fill="none" fill-rule="evenodd" transform="translate(3)">
        <polygon fill="#FFF" fill-rule="nonzero" points="110.431 72.512 91.272 91.717 60.736 91.717 44.57 107.922 44.57 91.717 18.824 91.717 18.824 11.294 110.431 11.294"/>
        <mask id="color-b" fill="#fff">
            <use xlinkHref="#color-a"/>
        </mask>
        <use fill="#563194" fill-rule="nonzero" xlinkHref="#color-a" />
    </g>
</svg>;