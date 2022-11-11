import React from 'react';

export const SvgSelector = ({ name }) => {
    switch (name) {
        case 'Logo': 
            return (
                <svg width="182" height="30" viewBox="0 0 182 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.7973 14.856H44.0293V17.736H35.7973V14.856ZM36.0853 24H32.5813V7.2H45.0373V10.08H36.0853V24ZM47.3636 24V11.136H50.5796V14.736L50.1716 13.68C50.5556 12.784 51.1636 12.112 51.9956 11.664C52.8276 11.2 53.8596 10.968 55.0916 10.968V14.136C54.9476 14.104 54.8116 14.088 54.6836 14.088C54.5716 14.072 54.4516 14.064 54.3236 14.064C53.2356 14.064 52.3636 14.376 51.7076 15C51.0676 15.624 50.7476 16.576 50.7476 17.856V24H47.3636ZM57.4886 24V11.136H60.8726V24H57.4886ZM59.1926 9.192C58.5686 9.192 58.0566 9.008 57.6566 8.64C57.2566 8.256 57.0566 7.784 57.0566 7.224C57.0566 6.68 57.2566 6.224 57.6566 5.856C58.0566 5.472 58.5686 5.28 59.1926 5.28C59.8166 5.28 60.3286 5.456 60.7286 5.808C61.1286 6.16 61.3286 6.616 61.3286 7.176C61.3286 7.752 61.1286 8.232 60.7286 8.616C60.3446 9 59.8326 9.192 59.1926 9.192ZM70.0388 24.168C68.8228 24.168 67.7268 23.896 66.7508 23.352C65.7748 22.808 64.9988 22.04 64.4228 21.048C63.8628 20.056 63.5828 18.896 63.5828 17.568C63.5828 16.224 63.8628 15.064 64.4228 14.088C64.9988 13.096 65.7748 12.328 66.7508 11.784C67.7268 11.24 68.8228 10.968 70.0388 10.968C71.1268 10.968 72.0868 11.208 72.9188 11.688C73.7508 12.152 74.3988 12.872 74.8628 13.848C75.3428 14.824 75.5828 16.064 75.5828 17.568C75.5828 19.056 75.3508 20.296 74.8868 21.288C74.4388 22.264 73.7988 22.992 72.9668 23.472C72.1508 23.936 71.1748 24.168 70.0388 24.168ZM70.5428 21.36C71.2148 21.36 71.8148 21.208 72.3428 20.904C72.8868 20.6 73.3108 20.16 73.6148 19.584C73.9348 19.008 74.0948 18.336 74.0948 17.568C74.0948 16.784 73.9348 16.112 73.6148 15.552C73.3108 14.976 72.8868 14.536 72.3428 14.232C71.8148 13.928 71.2148 13.776 70.5428 13.776C69.8708 13.776 69.2708 13.928 68.7428 14.232C68.2148 14.536 67.7908 14.976 67.4708 15.552C67.1668 16.112 67.0148 16.784 67.0148 17.568C67.0148 18.336 67.1668 19.008 67.4708 19.584C67.7908 20.16 68.2148 20.6 68.7428 20.904C69.2708 21.208 69.8708 21.36 70.5428 21.36ZM74.1908 24V21.168L74.2868 17.544L74.0468 13.92V6.192H77.4068V24H74.1908ZM87.0651 28.824C85.8651 28.824 84.7051 28.672 83.5851 28.368C82.4651 28.064 81.5291 27.616 80.7771 27.024L82.1931 24.552C82.7531 25.016 83.4571 25.384 84.3051 25.656C85.1531 25.928 86.0011 26.064 86.8491 26.064C88.2251 26.064 89.2251 25.752 89.8491 25.128C90.4731 24.52 90.7851 23.6 90.7851 22.368V20.256L91.0251 17.184L90.9531 14.088V11.136H94.1691V21.936C94.1691 24.304 93.5531 26.04 92.3211 27.144C91.1051 28.264 89.3531 28.824 87.0651 28.824ZM86.6091 23.4C85.3931 23.4 84.2971 23.144 83.3211 22.632C82.3451 22.104 81.5691 21.376 80.9931 20.448C80.4171 19.52 80.1291 18.432 80.1291 17.184C80.1291 15.92 80.4171 14.824 80.9931 13.896C81.5691 12.968 82.3451 12.248 83.3211 11.736C84.2971 11.224 85.3931 10.968 86.6091 10.968C87.6971 10.968 88.6571 11.184 89.4891 11.616C90.3371 12.048 91.0091 12.728 91.5051 13.656C92.0011 14.568 92.2491 15.744 92.2491 17.184C92.2491 18.608 92.0011 19.784 91.5051 20.712C91.0091 21.624 90.3371 22.304 89.4891 22.752C88.6571 23.184 87.6971 23.4 86.6091 23.4ZM87.1851 20.592C87.9051 20.592 88.5371 20.448 89.0811 20.16C89.6251 19.872 90.0491 19.472 90.3531 18.96C90.6731 18.448 90.8331 17.856 90.8331 17.184C90.8331 16.496 90.6731 15.896 90.3531 15.384C90.0491 14.872 89.6251 14.48 89.0811 14.208C88.5371 13.92 87.9051 13.776 87.1851 13.776C86.4971 13.776 85.8731 13.92 85.3131 14.208C84.7531 14.48 84.3131 14.872 83.9931 15.384C83.6891 15.896 83.5371 16.496 83.5371 17.184C83.5371 17.856 83.6891 18.448 83.9931 18.96C84.3131 19.472 84.7531 19.872 85.3131 20.16C85.8731 20.448 86.4971 20.592 87.1851 20.592ZM104.087 24.168C102.631 24.168 101.359 23.888 100.271 23.328C99.1994 22.752 98.3594 21.968 97.7514 20.976C97.1594 19.968 96.8634 18.832 96.8634 17.568C96.8634 16.288 97.1514 15.152 97.7274 14.16C98.3194 13.152 99.1274 12.368 100.151 11.808C101.175 11.248 102.327 10.968 103.607 10.968C104.871 10.968 105.999 11.24 106.991 11.784C107.999 12.328 108.791 13.096 109.367 14.088C109.943 15.08 110.231 16.264 110.231 17.64C110.231 17.768 110.223 17.92 110.207 18.096C110.191 18.272 110.175 18.432 110.159 18.576H99.5994V16.488H108.383L107.063 17.136C107.079 16.432 106.935 15.816 106.631 15.288C106.343 14.76 105.943 14.344 105.431 14.04C104.919 13.736 104.319 13.584 103.631 13.584C102.943 13.584 102.335 13.736 101.807 14.04C101.295 14.344 100.895 14.768 100.607 15.312C100.319 15.84 100.175 16.464 100.175 17.184V17.712C100.175 18.448 100.335 19.096 100.655 19.656C100.991 20.216 101.463 20.648 102.071 20.952C102.679 21.256 103.383 21.408 104.183 21.408C104.887 21.408 105.511 21.304 106.055 21.096C106.599 20.872 107.095 20.536 107.543 20.088L109.343 22.104C108.751 22.776 108.015 23.288 107.135 23.64C106.255 23.992 105.239 24.168 104.087 24.168ZM113.206 24V7.2H120.286C121.774 7.2 123.054 7.44 124.126 7.92C125.214 8.4 126.046 9.096 126.622 10.008C127.214 10.904 127.51 11.984 127.51 13.248C127.51 14.48 127.214 15.544 126.622 16.44C126.046 17.336 125.214 18.024 124.126 18.504C123.054 18.984 121.774 19.224 120.286 19.224H115.15L116.71 17.664V24H113.206ZM124.03 24L119.782 17.904H123.55L127.822 24H124.03ZM116.71 18.048L115.15 16.368H120.118C121.398 16.368 122.358 16.096 122.998 15.552C123.638 14.992 123.958 14.224 123.958 13.248C123.958 12.24 123.638 11.464 122.998 10.92C122.358 10.376 121.398 10.104 120.118 10.104H115.15L116.71 8.424V18.048ZM136.736 24.168C135.28 24.168 134.008 23.888 132.92 23.328C131.848 22.752 131.008 21.968 130.4 20.976C129.808 19.968 129.512 18.832 129.512 17.568C129.512 16.288 129.8 15.152 130.376 14.16C130.968 13.152 131.776 12.368 132.8 11.808C133.824 11.248 134.976 10.968 136.256 10.968C137.52 10.968 138.648 11.24 139.64 11.784C140.648 12.328 141.44 13.096 142.016 14.088C142.592 15.08 142.88 16.264 142.88 17.64C142.88 17.768 142.872 17.92 142.856 18.096C142.84 18.272 142.824 18.432 142.808 18.576H132.248V16.488H141.032L139.712 17.136C139.728 16.432 139.584 15.816 139.28 15.288C138.992 14.76 138.592 14.344 138.08 14.04C137.568 13.736 136.968 13.584 136.28 13.584C135.592 13.584 134.984 13.736 134.456 14.04C133.944 14.344 133.544 14.768 133.256 15.312C132.968 15.84 132.824 16.464 132.824 17.184V17.712C132.824 18.448 132.984 19.096 133.304 19.656C133.64 20.216 134.112 20.648 134.72 20.952C135.328 21.256 136.032 21.408 136.832 21.408C137.536 21.408 138.16 21.304 138.704 21.096C139.248 20.872 139.744 20.536 140.192 20.088L141.992 22.104C141.4 22.776 140.664 23.288 139.784 23.64C138.904 23.992 137.888 24.168 136.736 24.168ZM153.127 10.968C154.151 10.968 155.063 11.168 155.863 11.568C156.679 11.968 157.319 12.592 157.783 13.44C158.247 14.272 158.479 15.336 158.479 16.632V24H155.095V17.112C155.095 16.024 154.847 15.216 154.351 14.688C153.871 14.16 153.183 13.896 152.287 13.896C151.631 13.896 151.047 14.032 150.535 14.304C150.039 14.576 149.647 14.984 149.359 15.528C149.087 16.056 148.951 16.736 148.951 17.568V24H145.567V11.136H148.783V14.664L148.207 13.584C148.655 12.736 149.311 12.088 150.175 11.64C151.039 11.192 152.023 10.968 153.127 10.968ZM167.154 24.168C165.682 24.168 164.538 23.792 163.722 23.04C162.922 22.288 162.522 21.176 162.522 19.704V8.28H165.906V19.632C165.906 20.208 166.05 20.656 166.338 20.976C166.642 21.296 167.058 21.456 167.586 21.456C168.21 21.456 168.746 21.288 169.194 20.952L170.106 23.352C169.738 23.624 169.29 23.832 168.762 23.976C168.234 24.104 167.698 24.168 167.154 24.168ZM160.482 13.968V11.328H169.218V13.968H160.482Z" fill="white"/>
                    <path d="M21.25 3.75H8.75C7.36929 3.75 6.25 4.86929 6.25 6.25V23.75C6.25 25.1307 7.36929 26.25 8.75 26.25H21.25C22.6307 26.25 23.75 25.1307 23.75 23.75V6.25C23.75 4.86929 22.6307 3.75 21.25 3.75Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.25 12.5H23.75M11.25 16.25V20M11.25 7.5V8.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            );
        case 'SignIn':
            return (
                <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3333 2.26666H32.6666V31.7333H16.3333V29.4667H30.3333V4.53333H16.3333V2.26666ZM18.3259 9.3976L26.1193 16.9683L18.3563 25.1351L16.6436 23.5983L21.8353 18.1333H2.33325V15.8667H21.6836L16.6739 11.0024L18.3259 9.3976Z" fill="white"/>
                </svg>
            );
        case 'About':
            return (
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 42C15.6 42 8 34.4 8 25C8 15.6 15.6 8 25 8C34.4 8 42 15.6 42 25C42 34.4 34.4 42 25 42ZM25 10C16.7 10 10 16.7 10 25C10 33.3 16.7 40 25 40C33.3 40 40 33.3 40 25C40 16.7 33.3 10 25 10Z" fill="white"/>
                    <path d="M19.7999 19.6C20.0999 18.8 20.3999 18.2 20.9999 17.7C21.4999 17.2 22.0999 16.8 22.8999 16.5C23.6999 16.2 24.4999 16.1 25.3999 16.1C26.0999 16.1 26.7999 16.2 27.3999 16.4C27.9999 16.6 28.5999 16.9 29.0999 17.3C29.5999 17.7 29.9999 18.2 30.1999 18.8C30.4999 19.4 30.5999 20.1 30.5999 20.8C30.5999 21.8 30.3999 22.6 29.9999 23.3C29.5999 24 28.9999 24.6 28.3999 25.3L27.0999 26.6C26.7999 26.9 26.4999 27.2 26.3999 27.5C26.1999 27.8 26.0999 28.2 26.0999 28.6C25.9999 29 25.9999 29.3 25.9999 30.1H24.3999C24.3999 29.3 24.3999 29 24.4999 28.4C24.5999 27.9 24.7999 27.4 24.9999 26.9C25.1999 26.5 25.4999 26.1 25.8999 25.7C26.2999 25.3 26.7999 24.9 27.2999 24.3C27.7999 23.8 28.1999 23.3 28.4999 22.8C28.7999 22.3 28.9999 21.6 28.9999 21C28.9999 20.5 28.8999 20 28.6999 19.6C28.4999 19.2 28.1999 18.8 27.8999 18.5C27.5999 18.2 27.1999 18 26.6999 17.8C26.1999 17.6 25.7999 17.5 25.2999 17.5C24.5999 17.5 23.9999 17.6 23.4999 17.9C22.9999 18.1 22.4999 18.5 22.1999 18.9C21.8999 19.3 21.5999 19.8 21.3999 20.4C21.1999 21 20.9999 21.3 20.9999 22H19.3999C19.3999 21.1 19.4999 20.4 19.7999 19.6V19.6ZM25.9999 32V34H23.9999V32H25.9999Z" fill="white"/>
                </svg>
            );
        case 'Account': 
            return (
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_130_2)">
                    <path d="M34 16.983C34 7.6075 26.384 0 17 0C7.616 0 0 7.6075 0 16.983C0 22.1468 2.346 26.8005 6.018 29.9242C6.052 29.9582 6.086 29.9583 6.086 29.9923C6.392 30.2303 6.698 30.4682 7.038 30.7062C7.208 30.8082 7.344 30.9421 7.514 31.0781C10.3234 32.9829 13.6398 34.0008 17.034 34C20.4282 34.0008 23.7446 32.9829 26.554 31.0781C26.724 30.9761 26.86 30.8423 27.03 30.7381C27.336 30.5023 27.676 30.2643 27.982 30.0263C28.016 29.9923 28.05 29.9922 28.05 29.9582C31.654 26.7984 34 22.1468 34 16.983V16.983ZM17 31.8601C13.804 31.8601 10.88 30.8401 8.466 29.1422C8.5 28.8702 8.568 28.6004 8.636 28.3284C8.83859 27.5912 9.13573 26.8834 9.52 26.2225C9.894 25.5765 10.336 24.9985 10.88 24.4885C11.39 23.9785 12.002 23.5046 12.614 23.1306C13.26 22.7566 13.94 22.4846 14.688 22.2806C15.4418 22.0774 16.2193 21.9753 17 21.9768C19.3176 21.9603 21.5501 22.8494 23.222 24.4545C24.004 25.2365 24.616 26.1545 25.058 27.2064C25.296 27.8184 25.466 28.4644 25.568 29.1422C23.0588 30.9063 20.0673 31.8553 17 31.8601ZM11.798 16.1351C11.4984 15.4492 11.3478 14.7076 11.356 13.9591C11.356 13.2132 11.492 12.4652 11.798 11.7853C12.104 11.1053 12.512 10.4954 13.022 9.98537C13.532 9.47537 14.144 9.0695 14.824 8.7635C15.504 8.4575 16.252 8.3215 17 8.3215C17.782 8.3215 18.496 8.4575 19.176 8.7635C19.856 9.0695 20.468 9.4775 20.978 9.98537C21.488 10.4954 21.896 11.1074 22.202 11.7853C22.508 12.4652 22.644 13.2132 22.644 13.9591C22.644 14.7411 22.508 15.4551 22.202 16.133C21.9067 16.8029 21.4919 17.4136 20.978 17.935C20.4564 18.4482 19.8458 18.8622 19.176 19.1569C17.771 19.7343 16.195 19.7343 14.79 19.1569C14.1202 18.8622 13.5096 18.4482 12.988 17.935C12.4734 17.4211 12.0685 16.8081 11.798 16.133V16.1351ZM27.574 27.4104C27.574 27.3424 27.54 27.3084 27.54 27.2404C27.2056 26.1766 26.7127 25.1694 26.078 24.2526C25.4427 23.3291 24.6619 22.5145 23.766 21.8407C23.0818 21.326 22.3402 20.8925 21.556 20.5488C21.9127 20.3134 22.2433 20.0406 22.542 19.7349C23.0489 19.2344 23.4941 18.6751 23.868 18.0689C24.621 16.8317 25.0099 15.4073 24.99 13.9591C25.0005 12.8871 24.7923 11.8242 24.378 10.8354C23.969 9.88261 23.3803 9.01756 22.644 8.2875C21.9088 7.56507 21.0436 6.98825 20.094 6.5875C19.1035 6.17396 18.0393 5.96645 16.966 5.97762C15.8926 5.96713 14.8283 6.17536 13.838 6.58963C12.8802 6.98952 12.0129 7.57857 11.288 8.3215C10.5656 9.05587 9.98876 9.92039 9.588 10.8694C9.17373 11.8582 8.96548 12.9211 8.976 13.9931C8.976 14.7411 9.078 15.4551 9.282 16.133C9.486 16.847 9.758 17.493 10.132 18.1029C10.472 18.7149 10.948 19.2589 11.458 19.7689C11.764 20.0749 12.104 20.3447 12.478 20.5827C11.6914 20.9356 10.9495 21.3808 10.268 21.9088C9.384 22.5888 8.602 23.4026 7.956 24.2866C7.3148 25.1996 6.82142 26.2079 6.494 27.2744C6.46 27.3424 6.46 27.4104 6.46 27.4444C3.774 24.7265 2.108 21.0588 2.108 16.983C2.108 8.7975 8.806 2.10587 17 2.10587C25.194 2.10587 31.892 8.7975 31.892 16.983C31.8876 20.8929 30.3351 24.642 27.574 27.4104V27.4104Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_130_2">
                    <rect width="34" height="34" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            );
        default: return null;
    }
}