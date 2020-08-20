import React, {useEffect, useState} from "react";
import {Radio} from "antd";
import Icon from "@ant-design/icons";
import {FormItem} from "@components/form/formItem/FormItem";
import "./mealsOfWeek.css";

const MeatSvg = () => (
    <svg
        width="28"
        height="24"
        viewBox="0 0 28 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M27.3561 11.9109L27.2752 11.7492C26.9518 11.1427 26.5879 10.4958 26.1836 9.8893C25.6984 9.16153 24.9706 8.51462 24.0002 7.86771C24.0811 7.82728 24.1215 7.78685 24.162 7.74642C24.6876 7.26124 25.1323 6.61433 25.4558 5.92699C26.1027 4.51187 26.0623 3.05633 25.9005 1.64122C25.8601 1.15604 25.5771 0.751717 25.1728 0.428263C24.6876 0.0643768 24.0811 -0.0569186 23.5555 0.023945C22.5851 0.226104 21.8978 1.03474 21.8978 2.04553C21.8574 3.09676 21.453 3.9054 20.6848 4.55231C19.5932 3.50108 18.5419 3.25849 17.2481 3.25849C17.2077 3.25849 17.1673 3.25849 17.1268 3.25849C15.7521 3.25849 14.2966 3.25849 12.9219 3.25849C11.9516 3.25849 10.9812 3.25849 10.0513 3.25849C9.72781 3.25849 9.40436 3.29892 9.04047 3.37978C8.3127 3.54151 7.62536 3.9054 6.97845 4.55231C6.93802 4.51187 6.89759 4.47144 6.85715 4.47144C6.73586 4.35015 6.61456 4.26928 6.5337 4.14799C5.92722 3.46065 5.7655 2.65201 5.72506 1.84338C5.60377 0.832581 4.71427 0.023945 3.70347 0.023945C3.66304 0.023945 3.62261 0.023945 3.62261 0.023945C2.53095 0.0643768 1.64145 0.913445 1.60102 2.04553C1.56059 2.69244 1.60102 3.21806 1.60102 3.74367C1.68189 5.15878 2.16707 6.37174 3.097 7.42296C3.17786 7.54426 3.29916 7.62512 3.46088 7.74642C3.50132 7.78685 3.54175 7.78685 3.54175 7.82728C2.04577 8.67635 0.954113 9.97017 0.105045 11.83C-0.0162505 12.0726 -0.0162505 12.3152 0.0241813 12.4769C0.105045 12.6387 0.266772 12.8004 0.549795 12.8813L0.630658 12.9217C0.913681 13.0026 1.15627 13.0834 1.43929 13.2047C2.61182 13.5686 3.66304 13.6899 4.67384 13.5686C4.99729 13.5282 5.32075 13.4877 5.60377 13.4069C5.68463 13.4069 5.7655 13.3664 5.88679 13.3664C5.96766 13.609 6.08895 13.8112 6.16981 14.0538C6.41241 14.6198 6.61456 15.105 6.89759 15.6306C7.18061 16.1967 7.26147 16.7223 7.05931 17.2883C6.61456 18.7034 6.77629 20.1994 7.46363 21.4124C8.15097 22.5849 9.28306 23.3935 10.6577 23.6765C11.709 23.8787 12.8411 24 13.9327 24C15.0244 24 16.0756 23.8787 17.046 23.6765C18.3802 23.3935 19.4719 22.5849 20.1188 21.4528C20.8061 20.2398 20.9679 18.7439 20.5231 17.3692C20.3614 16.8031 20.3614 16.3584 20.5635 15.9136C20.8466 15.2667 21.17 14.6198 21.4935 13.9325L21.7361 13.4069C23.3129 13.7708 24.9706 13.609 26.9113 12.8408C27.1539 12.76 27.3156 12.5982 27.3561 12.3961C27.4774 12.2343 27.4774 12.0726 27.3561 11.9109ZM24.4854 1.56035C24.6471 1.72208 24.6876 1.96467 24.6876 2.20726C24.6876 2.40942 24.6876 2.57115 24.6876 2.77331C24.6876 3.37978 24.6876 3.98626 24.5663 4.59274C24.2833 5.96742 23.3938 7.01865 22.0191 7.66555C21.8574 7.01865 21.7361 6.37174 21.5743 5.72483C22.383 5.07792 22.9086 4.26928 23.1512 3.33935C23.232 2.97547 23.2725 2.57115 23.3129 2.20726C23.3533 1.72208 23.6364 1.39863 24.0407 1.39863C24.2024 1.35819 24.3641 1.43906 24.4854 1.56035ZM21.9382 9.28283C21.9382 9.24239 22.0191 9.16153 22.0595 9.1211L22.0999 9.08067H22.1404C22.1808 9.08067 22.2212 9.08067 22.2617 9.04024C22.4234 8.91894 22.5851 8.83808 22.7469 8.83808C22.9894 8.83808 23.2725 8.9998 23.5151 9.16153C24.5259 9.80844 25.2941 10.6979 25.8601 11.83C24.5663 12.3152 23.3129 12.3556 22.0191 12.0726C21.9786 12.0726 21.9382 11.9513 21.9382 11.9109C21.8978 10.9405 21.8978 10.0915 21.9382 9.28283ZM20.5635 7.58469C20.5635 8.91894 20.5635 10.3341 20.5231 11.7087C20.5231 12.8408 20.1996 13.8516 19.6336 14.822C19.0676 15.7115 18.9867 16.6818 19.2697 17.7331C19.5932 18.8247 19.4314 19.9973 18.8654 20.8868C18.3398 21.6954 17.5312 22.221 16.5608 22.3827C14.9839 22.6253 13.0028 22.6253 11.4664 22.4232C10.2939 22.2614 9.28306 21.6145 8.67659 20.6442C8.11054 19.7547 7.98924 18.7034 8.3127 17.6926C8.63615 16.7223 8.51486 15.7923 7.98925 14.9028C7.38277 13.8921 7.05931 12.8408 7.05931 11.7492C7.05931 10.3745 7.01888 8.87851 7.05931 7.4634C7.09975 5.96742 8.39356 4.6736 9.88954 4.6736C10.3747 4.6736 10.8599 4.6736 11.3451 4.6736C12.1537 4.6736 12.9624 4.6736 13.771 4.6736H14.8627C15.7522 4.6736 16.6416 4.6736 17.5311 4.6736C19.3101 4.63317 20.5635 5.88656 20.5635 7.58469ZM4.47168 6.89735C3.50132 6.04828 3.01613 4.95662 2.9757 3.66281C2.9757 3.17763 2.9757 2.69244 2.9757 2.24769C2.9757 1.76251 3.25873 1.43906 3.66304 1.43906H3.70347C4.10779 1.43906 4.35038 1.72208 4.39082 2.16683C4.43125 3.66281 5.03772 4.83533 6.12938 5.72483L5.72506 7.66555C5.23988 7.50383 4.83557 7.18037 4.47168 6.89735ZM5.7655 11.7896C5.7655 11.8705 5.68463 11.9513 5.68463 11.9918C4.30995 12.3556 2.93527 12.3152 1.64145 11.83C2.32879 10.4553 3.33959 9.44455 4.63341 8.79765C4.71427 8.75721 4.79513 8.79765 4.91643 8.79765H4.95686C4.95686 8.79765 4.99729 8.79764 5.03772 8.83808C5.07816 8.87851 5.11859 8.87851 5.15902 8.87851C5.6442 8.95937 5.84636 9.20196 5.7655 9.80844C5.72506 10.2128 5.72506 10.6575 5.72506 11.0618C5.7655 11.3044 5.7655 11.547 5.7655 11.7896Z"
            fill="white"
        />
    </svg>
);

const ChickenSvg = () => (
    <svg
        width="28"
        height="24"
        viewBox="0 0 28 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M8.68191 23.8057C8.44709 23.7666 8.25139 23.7666 8.01657 23.7274C6.05968 23.4535 4.4159 22.5925 3.08522 21.1444C1.98936 19.9311 1.32402 18.5221 1.08919 16.9175C0.776087 14.6866 1.28488 12.6515 2.6547 10.8511C3.78969 9.32476 5.31607 8.30718 7.19468 7.87667C8.40795 7.6027 9.62121 7.48529 10.8736 7.56356C11.4607 7.6027 12.0869 7.6027 12.674 7.64184C13.8481 7.72012 14.9831 7.44615 16.0398 6.9765C16.392 6.81995 16.7051 6.6634 17.0182 6.46771C17.2922 6.31116 17.5662 6.35029 17.801 6.54598C17.9184 6.6634 17.9967 6.78081 18.1141 6.89822C18.1924 6.85909 18.1924 6.81995 18.2315 6.78081C19.0143 6.03719 19.7579 5.25444 20.5406 4.51082C20.6189 4.43255 20.6189 4.39341 20.5798 4.31513C20.0319 2.86704 20.932 1.26239 22.4584 1.02756C23.4368 0.871012 24.7284 1.3798 25.0806 2.59307C25.0806 2.63221 25.1589 2.67135 25.198 2.71049C26.3722 3.06273 27.0375 4.00203 26.9984 5.2153C26.9592 6.38943 25.9416 7.44615 24.7675 7.52443C24.4153 7.56356 24.063 7.52443 23.7108 7.36788C23.6717 7.36788 23.5934 7.36788 23.5934 7.40701C22.8106 8.18977 21.9887 9.01166 21.206 9.79441C21.206 9.83355 21.2451 9.83355 21.2451 9.83355C21.4408 10.0684 21.4799 10.3032 21.3625 10.5772C20.9712 11.3991 20.5798 12.221 20.1493 13.0428C19.0925 15.1563 17.9576 17.2306 16.5877 19.1483C15.9615 20.0094 15.3353 20.8704 14.5134 21.614C13.3002 22.7099 11.8912 23.4143 10.2474 23.6883C9.97346 23.7274 9.69949 23.7666 9.42553 23.8057C9.22984 23.8057 8.95588 23.8057 8.68191 23.8057ZM11.539 8.85511C10.404 8.77683 9.26897 8.77683 8.13398 8.97252C7.07726 9.16821 6.05968 9.48131 5.15952 10.1467C2.88953 11.8296 1.91108 14.0996 2.3416 16.8783C2.57642 18.6004 3.43746 19.9702 4.76814 21.0661C6.21624 22.2402 7.89915 22.749 9.77776 22.5533C11.2259 22.3968 12.4783 21.8488 13.5741 20.9095C14.396 20.2051 15.0222 19.344 15.6484 18.4439C17.3705 15.939 18.7403 13.2777 20.071 10.538C20.1101 10.4598 20.071 10.4206 20.0319 10.3815C19.1317 9.52045 18.2707 8.65942 17.3705 7.83753C17.2922 7.79839 17.2531 7.79839 17.2139 7.79839C17.0574 7.87667 16.8617 7.95494 16.7051 8.03322C15.6484 8.50287 14.5134 8.85511 13.3393 8.85511C12.7131 8.89425 12.126 8.85511 11.539 8.85511ZM20.345 8.97252C20.3841 8.93338 20.4232 8.89425 20.4624 8.85511C21.3234 7.99408 22.2236 7.09391 23.0846 6.23288C23.3586 5.95892 23.6325 5.91978 23.9456 6.11547C24.7284 6.62426 25.746 6.11547 25.8242 5.17616C25.8634 4.70651 25.5894 4.19772 25.1589 4.00203C25.1198 4.11944 25.0806 4.27599 25.0415 4.39341C24.9241 4.74565 24.611 4.94134 24.2587 4.82392C23.9065 4.70651 23.7499 4.39341 23.8673 4.00203C23.9065 3.84548 23.9456 3.64979 23.9848 3.4541C24.1022 2.71049 23.5151 2.12342 22.7715 2.2017C21.8713 2.31911 21.4017 3.33669 21.9105 4.08031C22.1453 4.43255 22.1061 4.70651 21.8322 5.01961C21.2843 5.56754 20.6972 6.11547 20.1493 6.70253C19.797 7.05477 19.4839 7.40701 19.1317 7.75925C19.5231 8.15063 19.9144 8.58115 20.345 8.97252Z"
            fill="white"
            stroke="#D7C378"
            stroke-width="0.1"
            stroke-miterlimit="10"
        />
    </svg>
);

const VegetablesSvg = () => (
    <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M23.2038 4.97007C22.7748 4.54109 22.1508 4.65808 22.1508 4.65808C22.1508 4.65808 22.4628 4.22911 22.4628 3.95612C22.5018 2.94217 21.9948 2.24021 21.0589 1.73324C20.7079 1.53825 19.8889 1.34326 19.4209 1.69424C19.4209 0.99228 18.797 0.0173324 17.4711 0.0173324C17.4711 -0.0216655 17.0031 0.0173324 16.9641 0.0173324C16.9251 0.0173324 16.8471 0.0173324 16.8081 0.0173324C14.5072 0.641299 14.1952 3.76113 13.3373 5.75002C7.40961 2.98117 0.311983 16.0845 0 20.7642C0 20.9592 0 21.3882 0 21.5832C0.584969 28.2128 13.5323 19.3603 16.0671 16.9424C18.095 15.4995 19.07 13.0036 18.212 10.6248C20.7859 9.76681 26.2456 8.0509 23.2038 4.97007ZM16.1841 15.0705C15.5992 15.6165 15.0142 16.1625 14.4292 16.7474C13.7273 16.0455 13.0253 15.3045 12.2843 14.6415C12.0504 14.3686 11.6994 14.1346 11.3484 14.3296C11.0364 14.4466 10.8414 14.9535 11.3094 15.4215C12.0504 16.1625 13.2593 17.6834 13.2593 17.6834C13.2593 17.6834 10.5684 19.5163 9.47649 20.2182C9.32049 20.1013 7.83858 18.1124 7.01962 18.6193C6.16167 19.3993 7.68258 20.2572 8.11156 20.9202L7.87758 21.0762C4.99174 22.5581 -0.623962 24.859 1.83291 19.0093C2.33988 19.3993 3.15883 20.2572 3.58781 19.2433C3.89979 18.5803 3.00284 18.0344 2.49586 17.5274C2.76885 16.3185 3.89979 14.6415 4.56276 13.2766C4.75775 13.3936 5.88869 14.4856 6.51265 14.9535C7.13662 15.4215 7.4486 15.2655 7.68259 15.0705C7.91658 14.8755 7.64359 14.3686 7.29261 14.0176C6.66865 13.3936 6.00567 12.7306 5.42071 12.1067C6.20066 10.9757 7.21461 9.72781 8.30655 8.51887C8.81352 8.79186 9.78847 10.1958 10.6854 10.8977C11.2314 11.3267 11.6994 11.4827 12.0113 11.1707C12.3233 10.8587 11.8554 10.1958 11.6994 10.0788C11.0364 9.33783 9.35949 7.62192 9.2815 7.54393C9.2815 7.54393 9.55449 7.38794 9.55449 7.34894C10.8024 6.68597 12.3623 6.84196 13.4153 7.85591C15.5212 9.49382 18.914 12.3407 16.1841 15.0705ZM22.1508 7.58293C20.5909 8.47988 19.265 8.86986 17.3541 9.33783C16.8081 8.47988 15.5212 7.30994 14.5852 6.56898C15.3262 4.85307 16.1061 2.5522 16.3401 1.92823C16.6131 1.14827 17.705 1.26527 18.095 1.85023C18.485 2.5132 17.705 3.13716 17.5101 3.72213C17.1201 4.22911 17.939 5.04806 18.407 4.54109C18.797 4.11211 19.07 3.68313 19.4209 3.21516C20.1229 2.12322 21.7998 3.68314 20.8249 4.50209C20.4349 4.85307 19.9279 5.12606 19.538 5.47704C18.992 5.86702 19.499 6.68597 20.0839 6.52998C20.3959 6.41299 20.7469 6.218 21.0589 6.06201C22.1118 5.08706 23.3207 6.88096 22.1508 7.58293Z"
            fill="white"
        />
    </svg>
);

const MeatIcon = () => <Icon component={MeatSvg}/>;
const ChickenIcon = () => <Icon component={ChickenSvg}/>;
const VegetablesIcon = () => <Icon component={VegetablesSvg}/>;

export function MealsOfWeek({form, label, name, tooltipTitle}) {
    const [selectedOnMonday, setSelectedOnMonday] = useState();
    const [selectedOnTuesday, setSelectedOnTuesday] = useState();
    const [selectedOnWednesday, setSelectedOnWednesday] = useState();
    const [selectedOnThursday, setSelectedOnThursday] = useState();
    const [selectedOnFriday, setSelectedOnFriday] = useState();

    useEffect(() => {
        triggerChange();
    }, [selectedOnMonday, selectedOnTuesday, selectedOnWednesday, selectedOnThursday, selectedOnFriday]);

    const triggerChange = () => {
        form.setFieldsValue({
            [name]: {
                monday: selectedOnMonday,
                tuesday: selectedOnTuesday,
                wednesday: selectedOnWednesday,
                thursday: selectedOnThursday,
                friday: selectedOnFriday
            }
        });
    };

    const checkMeals = () => {
        const mealsOfWeek = form.getFieldValue(name);
        if (Object.values(mealsOfWeek).includes(undefined)) {
            return Promise.reject(tooltipTitle);
        }
        return Promise.resolve();
    };

    return (
        <FormItem
            label={label}
            name={name}
            tooltipTitle={tooltipTitle}
            rules={[
                {
                    validator: checkMeals
                }
            ]}
        >
            <table>
                <tr>
                    <td/>
                    <td>Lun</td>
                    <td>Mar</td>
                    <td>Mer</td>
                    <td>Jeu</td>
                    <td>Ven</td>
                </tr>
                <tr>
                    <td>
                        <MeatIcon/>
                    </td>
                    <td>
                        <Radio
                            type="radio"
                            name="monday"
                            data-label="monday-meat"
                            checked={selectedOnMonday === "meat"}
                            onChange={() => setSelectedOnMonday("meat")}
                        />
                    </td>
                    <td>
                        <Radio
                            type="radio"
                            name="tuesday"
                            data-label="tuesday-meat"
                            checked={selectedOnTuesday === "meat"}
                            onChange={() => setSelectedOnTuesday("meat")}
                        />
                    </td>
                    <td>
                        <Radio
                            type="radio"
                            name="wednesday"
                            data-label="wednesday-meat"
                            checked={selectedOnWednesday === "meat"}
                            onChange={() => setSelectedOnWednesday("meat")}
                        />
                    </td>
                    <td>
                        <Radio
                            type="radio"
                            name="thursday"
                            data-label="thursday-meat"
                            checked={selectedOnThursday === "meat"}
                            onChange={() => setSelectedOnThursday("meat")}
                        />
                    </td>
                    <td>
                        <Radio
                            type="radio"
                            name="friday"
                            data-label="friday-meat"
                            checked={selectedOnFriday === "meat"}
                            onChange={() => setSelectedOnFriday("meat")}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <ChickenIcon/>
                    </td>
                    <td>
                        <Radio
                            type="radio"
                            name="monday"
                            data-label="monday-chicken"
                            checked={selectedOnMonday === "chicken"}
                            onChange={() => setSelectedOnMonday("chicken")}
                        />
                    </td>
                    <td>
                        <Radio
                            type="radio"
                            name="tuesday"
                            data-label="tuesday-chicken"
                            checked={selectedOnTuesday === "chicken"}
                            onChange={() => setSelectedOnTuesday("chicken")}
                        />
                    </td>
                    <td>
                        <Radio
                            type="radio"
                            name="wednesday"
                            data-label="wednesday-chicken"
                            checked={selectedOnWednesday === "chicken"}
                            onChange={() => setSelectedOnWednesday("chicken")}
                        />
                    </td>
                    <td>
                        <Radio
                            type="radio"
                            name="thursday"
                            data-label="thursday-chicken"
                            checked={selectedOnThursday === "chicken"}
                            onChange={() => setSelectedOnThursday("chicken")}
                        />
                    </td>
                    <td>
                        <Radio
                            type="radio"
                            name="friday"
                            data-label="friday-chicken"
                            checked={selectedOnFriday === "chicken"}
                            onChange={() => setSelectedOnFriday("chicken")}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <VegetablesIcon/>
                    </td>
                    <td>
                        <Radio
                            type="radio"
                            name="monday"
                            data-label="monday-vegetables"
                            checked={selectedOnMonday === "vegetables"}
                            onChange={() => setSelectedOnMonday("vegetables")}
                        />
                    </td>
                    <td>
                        <Radio
                            type="radio"
                            name="tuesday"
                            data-label="tuesday-vegetables"
                            checked={selectedOnTuesday === "vegetables"}
                            onChange={() => setSelectedOnTuesday("vegetables")}
                        />
                    </td>
                    <td>
                        <Radio
                            type="radio"
                            name="wednesday"
                            data-label="wednesday-vegetables"
                            checked={selectedOnWednesday === "vegetables"}
                            onChange={() => setSelectedOnWednesday("vegetables")}
                        />
                    </td>
                    <td>
                        <Radio
                            type="radio"
                            name="thursday"
                            data-label="thursday-vegetables"
                            checked={selectedOnThursday === "vegetables"}
                            onChange={() => setSelectedOnThursday("vegetables")}
                        />
                    </td>
                    <td>
                        <Radio
                            type="radio"
                            name="friday"
                            data-label="friday-vegetables"
                            checked={selectedOnFriday === "vegetables"}
                            onChange={() => setSelectedOnFriday("vegetables")}
                        />
                    </td>
                </tr>
            </table>
        </FormItem>
    );
}
