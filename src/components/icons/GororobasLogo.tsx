import { cn } from '@/utils/cn'
import type { SVGProps } from 'react'

export default function GororobasLogo(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			viewBox="0 0 143 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-label="Logo do Gororobas"
			{...props}
			className={cn('h-[1.5em]', props.className)}
		>
			<path
				d="M9.26147 31.16C8.16014 31.16 7.1428 30.9827 6.20947 30.628C5.27614 30.2733 4.47347 29.7787 3.80147 29.144C3.12947 28.528 2.62547 27.8 2.28947 26.96L5.20147 25.756C5.4628 26.4653 5.9388 27.0533 6.62947 27.52C7.3388 27.9867 8.2068 28.22 9.23347 28.22C10.0361 28.22 10.7548 28.0613 11.3895 27.744C12.0241 27.4453 12.5281 26.9973 12.9015 26.4C13.2748 25.8213 13.4615 25.1213 13.4615 24.3V20.884L14.0215 21.528C13.4988 22.4987 12.7708 23.236 11.8375 23.74C10.9228 24.244 9.8868 24.496 8.72947 24.496C7.32947 24.496 6.06947 24.1693 4.94947 23.516C3.82947 22.8627 2.9428 21.9667 2.28947 20.828C1.6548 19.6893 1.33747 18.4107 1.33747 16.992C1.33747 15.5547 1.6548 14.276 2.28947 13.156C2.9428 12.036 3.82014 11.1493 4.92147 10.496C6.0228 9.84267 7.2828 9.516 8.70147 9.516C9.8588 9.516 10.8855 9.768 11.7815 10.272C12.6961 10.7573 13.4428 11.4667 14.0215 12.4L13.6015 13.184V9.852H16.5975V24.3C16.5975 25.6067 16.2801 26.7733 15.6455 27.8C15.0295 28.8453 14.1708 29.6667 13.0695 30.264C11.9681 30.8613 10.6988 31.16 9.26147 31.16ZM9.09347 21.556C9.93347 21.556 10.6801 21.36 11.3335 20.968C11.9868 20.5573 12.5001 20.016 12.8735 19.344C13.2655 18.6533 13.4615 17.8787 13.4615 17.02C13.4615 16.1613 13.2655 15.3867 12.8735 14.696C12.4815 14.0053 11.9588 13.464 11.3055 13.072C10.6521 12.6613 9.9148 12.456 9.09347 12.456C8.2348 12.456 7.46947 12.6613 6.79747 13.072C6.12547 13.464 5.59347 14.0053 5.20147 14.696C4.82814 15.368 4.64147 16.1427 4.64147 17.02C4.64147 17.86 4.82814 18.6253 5.20147 19.316C5.59347 20.0067 6.12547 20.5573 6.79747 20.968C7.46947 21.36 8.2348 21.556 9.09347 21.556ZM27.6091 25.336C26.1531 25.336 24.8185 24.9907 23.6051 24.3C22.4105 23.6093 21.4585 22.6667 20.7491 21.472C20.0398 20.2773 19.6851 18.924 19.6851 17.412C19.6851 15.8813 20.0398 14.528 20.7491 13.352C21.4585 12.1573 22.4105 11.224 23.6051 10.552C24.7998 9.86133 26.1345 9.516 27.6091 9.516C29.1025 9.516 30.4371 9.86133 31.6131 10.552C32.8078 11.224 33.7505 12.1573 34.4411 13.352C35.1505 14.528 35.5051 15.8813 35.5051 17.412C35.5051 18.9427 35.1505 20.3053 34.4411 21.5C33.7318 22.6947 32.7798 23.6373 31.5851 24.328C30.3905 25 29.0651 25.336 27.6091 25.336ZM27.6091 22.396C28.5051 22.396 29.2985 22.1813 29.9891 21.752C30.6798 21.3227 31.2211 20.7347 31.6131 19.988C32.0238 19.2227 32.2291 18.364 32.2291 17.412C32.2291 16.46 32.0238 15.6107 31.6131 14.864C31.2211 14.1173 30.6798 13.5293 29.9891 13.1C29.2985 12.6707 28.5051 12.456 27.6091 12.456C26.7318 12.456 25.9385 12.6707 25.2291 13.1C24.5385 13.5293 23.9878 14.1173 23.5771 14.864C23.1851 15.6107 22.9891 16.46 22.9891 17.412C22.9891 18.364 23.1851 19.2227 23.5771 19.988C23.9878 20.7347 24.5385 21.3227 25.2291 21.752C25.9385 22.1813 26.7318 22.396 27.6091 22.396ZM38.5941 25V9.852H41.6181V12.904L41.3381 12.456C41.6741 11.4667 42.2154 10.7573 42.9621 10.328C43.7088 9.88 44.6048 9.656 45.6501 9.656H46.5741V12.54H45.2581C44.2128 12.54 43.3634 12.8667 42.7101 13.52C42.0754 14.1547 41.7581 15.0693 41.7581 16.264V25H38.5941ZM56.0466 25.336C54.5906 25.336 53.256 24.9907 52.0426 24.3C50.848 23.6093 49.896 22.6667 49.1866 21.472C48.4773 20.2773 48.1226 18.924 48.1226 17.412C48.1226 15.8813 48.4773 14.528 49.1866 13.352C49.896 12.1573 50.848 11.224 52.0426 10.552C53.2373 9.86133 54.572 9.516 56.0466 9.516C57.54 9.516 58.8746 9.86133 60.0506 10.552C61.2453 11.224 62.188 12.1573 62.8786 13.352C63.588 14.528 63.9426 15.8813 63.9426 17.412C63.9426 18.9427 63.588 20.3053 62.8786 21.5C62.1693 22.6947 61.2173 23.6373 60.0226 24.328C58.828 25 57.5026 25.336 56.0466 25.336ZM56.0466 22.396C56.9426 22.396 57.736 22.1813 58.4266 21.752C59.1173 21.3227 59.6586 20.7347 60.0506 19.988C60.4613 19.2227 60.6666 18.364 60.6666 17.412C60.6666 16.46 60.4613 15.6107 60.0506 14.864C59.6586 14.1173 59.1173 13.5293 58.4266 13.1C57.736 12.6707 56.9426 12.456 56.0466 12.456C55.1693 12.456 54.376 12.6707 53.6666 13.1C52.976 13.5293 52.4253 14.1173 52.0146 14.864C51.6226 15.6107 51.4266 16.46 51.4266 17.412C51.4266 18.364 51.6226 19.2227 52.0146 19.988C52.4253 20.7347 52.976 21.3227 53.6666 21.752C54.376 22.1813 55.1693 22.396 56.0466 22.396ZM67.0316 25V9.852H70.0556V12.904L69.7756 12.456C70.1116 11.4667 70.6529 10.7573 71.3996 10.328C72.1463 9.88 73.0423 9.656 74.0876 9.656H75.0116V12.54H73.6956C72.6503 12.54 71.8009 12.8667 71.1476 13.52C70.5129 14.1547 70.1956 15.0693 70.1956 16.264V25H67.0316ZM84.4841 25.336C83.0281 25.336 81.6935 24.9907 80.4801 24.3C79.2855 23.6093 78.3335 22.6667 77.6241 21.472C76.9148 20.2773 76.5601 18.924 76.5601 17.412C76.5601 15.8813 76.9148 14.528 77.6241 13.352C78.3335 12.1573 79.2855 11.224 80.4801 10.552C81.6748 9.86133 83.0095 9.516 84.4841 9.516C85.9775 9.516 87.3121 9.86133 88.4881 10.552C89.6828 11.224 90.6255 12.1573 91.3161 13.352C92.0255 14.528 92.3801 15.8813 92.3801 17.412C92.3801 18.9427 92.0255 20.3053 91.3161 21.5C90.6068 22.6947 89.6548 23.6373 88.4601 24.328C87.2655 25 85.9401 25.336 84.4841 25.336ZM84.4841 22.396C85.3801 22.396 86.1735 22.1813 86.8641 21.752C87.5548 21.3227 88.0961 20.7347 88.4881 19.988C88.8988 19.2227 89.1041 18.364 89.1041 17.412C89.1041 16.46 88.8988 15.6107 88.4881 14.864C88.0961 14.1173 87.5548 13.5293 86.8641 13.1C86.1735 12.6707 85.3801 12.456 84.4841 12.456C83.6068 12.456 82.8135 12.6707 82.1041 13.1C81.4135 13.5293 80.8628 14.1173 80.4521 14.864C80.0601 15.6107 79.8641 16.46 79.8641 17.412C79.8641 18.364 80.0601 19.2227 80.4521 19.988C80.8628 20.7347 81.4135 21.3227 82.1041 21.752C82.8135 22.1813 83.6068 22.396 84.4841 22.396ZM103.561 25.336C102.385 25.336 101.312 25.0933 100.341 24.608C99.3891 24.1227 98.6518 23.4227 98.1291 22.508L98.4931 21.92V25H95.4691V3.804H98.6331V12.988L98.1291 12.26C98.6891 11.4013 99.4358 10.7293 100.369 10.244C101.302 9.75867 102.366 9.516 103.561 9.516C104.998 9.516 106.286 9.86133 107.425 10.552C108.582 11.2427 109.488 12.1853 110.141 13.38C110.813 14.5747 111.149 15.9187 111.149 17.412C111.149 18.9053 110.813 20.2493 110.141 21.444C109.488 22.6387 108.592 23.5907 107.453 24.3C106.314 24.9907 105.017 25.336 103.561 25.336ZM103.253 22.396C104.149 22.396 104.942 22.1813 105.633 21.752C106.324 21.3227 106.865 20.7347 107.257 19.988C107.668 19.2227 107.873 18.364 107.873 17.412C107.873 16.46 107.668 15.6107 107.257 14.864C106.865 14.1173 106.324 13.5293 105.633 13.1C104.942 12.6707 104.149 12.456 103.253 12.456C102.376 12.456 101.582 12.6707 100.873 13.1C100.182 13.5293 99.6318 14.1173 99.2211 14.864C98.8291 15.6107 98.6331 16.46 98.6331 17.412C98.6331 18.364 98.8291 19.2227 99.2211 19.988C99.6318 20.7347 100.182 21.3227 100.873 21.752C101.582 22.1813 102.376 22.396 103.253 22.396ZM118.763 25.336C117.736 25.336 116.831 25.1587 116.047 24.804C115.282 24.4307 114.684 23.9267 114.255 23.292C113.826 22.6387 113.611 21.8733 113.611 20.996C113.611 20.1747 113.788 19.4373 114.143 18.784C114.516 18.1307 115.086 17.58 115.851 17.132C116.616 16.684 117.578 16.3667 118.735 16.18L123.999 15.312V17.804L119.351 18.616C118.511 18.7653 117.895 19.036 117.503 19.428C117.111 19.8013 116.915 20.2867 116.915 20.884C116.915 21.4627 117.13 21.9387 117.559 22.312C118.007 22.6667 118.576 22.844 119.267 22.844C120.126 22.844 120.872 22.6573 121.507 22.284C122.16 21.9107 122.664 21.416 123.019 20.8C123.374 20.1653 123.551 19.4653 123.551 18.7V14.808C123.551 14.0613 123.271 13.4547 122.711 12.988C122.17 12.5027 121.442 12.26 120.527 12.26C119.687 12.26 118.95 12.484 118.315 12.932C117.699 13.3613 117.242 13.9213 116.943 14.612L114.311 13.296C114.591 12.5493 115.048 11.896 115.683 11.336C116.318 10.7573 117.055 10.3093 117.895 9.992C118.754 9.67467 119.659 9.516 120.611 9.516C121.806 9.516 122.86 9.74 123.775 10.188C124.708 10.636 125.427 11.2613 125.931 12.064C126.454 12.848 126.715 13.7627 126.715 14.808V25H123.691V22.256L124.335 22.34C123.98 22.956 123.523 23.488 122.963 23.936C122.422 24.384 121.796 24.7293 121.087 24.972C120.396 25.2147 119.622 25.336 118.763 25.336ZM136.014 25.336C134.465 25.336 133.102 24.9533 131.926 24.188C130.769 23.4227 129.957 22.396 129.49 21.108L131.926 19.96C132.337 20.8187 132.897 21.5 133.606 22.004C134.334 22.508 135.137 22.76 136.014 22.76C136.761 22.76 137.368 22.592 137.834 22.256C138.301 21.92 138.534 21.4627 138.534 20.884C138.534 20.5107 138.432 20.212 138.226 19.988C138.021 19.7453 137.76 19.5493 137.442 19.4C137.144 19.2507 136.836 19.1387 136.518 19.064L134.138 18.392C132.832 18.0187 131.852 17.4587 131.198 16.712C130.564 15.9467 130.246 15.06 130.246 14.052C130.246 13.1373 130.48 12.344 130.946 11.672C131.413 10.9813 132.057 10.4493 132.878 10.076C133.7 9.70267 134.624 9.516 135.65 9.516C137.032 9.516 138.264 9.86133 139.346 10.552C140.429 11.224 141.194 12.1667 141.642 13.38L139.206 14.528C138.908 13.8 138.432 13.2213 137.778 12.792C137.144 12.3627 136.425 12.148 135.622 12.148C134.932 12.148 134.381 12.316 133.97 12.652C133.56 12.9693 133.354 13.3893 133.354 13.912C133.354 14.2667 133.448 14.5653 133.634 14.808C133.821 15.032 134.064 15.2187 134.362 15.368C134.661 15.4987 134.969 15.6107 135.286 15.704L137.75 16.432C139.001 16.7867 139.962 17.3467 140.634 18.112C141.306 18.8587 141.642 19.7547 141.642 20.8C141.642 21.696 141.4 22.4893 140.914 23.18C140.448 23.852 139.794 24.384 138.954 24.776C138.114 25.1493 137.134 25.336 136.014 25.336Z"
				fill="#FF785A"
			/>
		</svg>
	)
}
