import React, { useRef, useState } from 'react';
import style from '../App.module.scss';
import arrow from '../images/Vector 58.webp';

function Countries() {
    const [option, toggleOption] = useState(false);
    let [inputValue, setInputValue] = useState('');
    const optionRef = useRef();

    const showOptions = () => {
        toggleOption(!option)
    }

    const hideToggle = event => {
       setInputValue(event.target.id)
        toggleOption(!option);
    }
    return  <div className={style.eachInfo}>
    <label>Country</label>
   {option ? 
    <div className={style.options}>
    <div className={style.realOption}>
    <p>select country</p>
    <p id="Afghanistan" onClick={hideToggle} value='Afghanistan'>Afghanistan</p>
    <p id="Aland Islands" onClick={hideToggle}>Aland Islands</p>
    <p id="Albania" onClick={hideToggle}>Albania</p>
    <p id="Algeria" onClick={hideToggle}>Algeria</p>
    <p id="Andorra" onClick={hideToggle}>Andorra</p>
    <p id="Angola" onClick={hideToggle}>Angola</p>
    <p id="Antarctica" onClick={hideToggle}>Antarctica</p>
    <p id="Argentina" onClick={hideToggle}>Argentina</p>
    <p id="Armenia" onClick={hideToggle}>Armenia</p>
    <p id="Australia" onClick={hideToggle}>Australia</p>
    <p id="Austria" onClick={hideToggle}>Austria</p>
    <p id="Azerbaijan" onClick={hideToggle}>Azerbaijan</p>
    <p id=">Bahamas" onClick={hideToggle}>Bahamas</p>
    <p id="Bahrain" onClick={hideToggle}>Bahrain</p>
    <p id="Bangladesh" onClick={hideToggle}>Bangladesh</p>
    <p id="Belarus" onClick={hideToggle}>Belarus</p>
    <p id="Belgium" onClick={hideToggle}>Belgium</p>
    <p id="Benin" onClick={hideToggle}>Benin</p>
    <p id="Bolivia" onClick={hideToggle}>Bolivia</p>
    <p id="Bosnia and Herzegovina" onClick={hideToggle}>Bosnia and Herzegovina</p>
    <p id="Botswana" onClick={hideToggle}>Botswana</p>
    <p id="Brazil" onClick={hideToggle}>Brazil</p>
    <p id="Brunei Darussalam" onClick={hideToggle}>Brunei Darussalam</p>
    <p id="Bulgaria" onClick={hideToggle}>Bulgaria</p>
    <p id="Burkina Faso" onClick={hideToggle}>Burkina Faso</p>
    <p id="Burundi" onClick={hideToggle}>Burundi</p>
    <p id="Cameroon" onClick={hideToggle}>Cameroon</p>
    <p id="Canada" onClick={hideToggle}>Canada</p>
    <p id="Cape Verde" onClick={hideToggle}>Cape Verde</p>
    <p id="Central African Republic" onClick={hideToggle}>Central African Republic</p>
    <p id="Chad" onClick={hideToggle}>Chad</p>
    <p id="Chile" onClick={hideToggle}>Chile</p>
    <p id="China" onClick={hideToggle}>China</p>
    <p id="Colombia" onClick={hideToggle}>Colombia</p>
    <p id="Comoros" onClick={hideToggle}>Comoros</p>
    <p id="Congo" onClick={hideToggle}>Congo</p>
    <p id="Costa Rica" onClick={hideToggle}>Costa Rica</p>
    <p id="Cote D'Ivoire" onClick={hideToggle}>Cote D'Ivoire</p>
    <p id="Croatia" onClick={hideToggle}>Croatia</p>
    <p id="Cuba" onClick={hideToggle}>Cuba</p>
    <p id="Cyprus" onClick={hideToggle}>Cyprus</p>
    <p id="Czech Republic" onClick={hideToggle}>Czech Republic</p>
    <p id="Denmark" onClick={hideToggle}>Denmark</p>
    <p id="Djibouti" onClick={hideToggle}>Djibouti</p>
    <p id="Dominican Republic" onClick={hideToggle}>Dominican Republic</p>
    <p id="Ecuador" onClick={hideToggle}>Ecuador</p>
    <p id="Egypt" onClick={hideToggle}>Egypt</p>
    <p id="El Salvador" onClick={hideToggle}>El Salvador</p>
    <p id="Equatorial Guinea" onClick={hideToggle}>Equatorial Guinea</p>
    <p id="Eritrea" onClick={hideToggle}>Eritrea</p>
    <p id="Estonia" onClick={hideToggle}>Estonia</p>
    <p id="Ethiopia" onClick={hideToggle}>Ethiopia</p>
    <p id="Finland" onClick={hideToggle}>Finland</p>
    <p id="France" onClick={hideToggle}>France</p>
    <p id="Gabon" onClick={hideToggle}>Gabon</p>
    <p id="Gambia" onClick={hideToggle}>Gambia</p>
    <p id="Georgia" onClick={hideToggle}>Georgia</p>
    <p id="Germany" onClick={hideToggle}>Germany</p>
    <p id="Ghana" onClick={hideToggle}>Ghana</p>
    <p id="Gibraltar" onClick={hideToggle}>Gibraltar</p>
    <p id="Greece" onClick={hideToggle}>Greece</p>
    <p id="Greenland" onClick={hideToggle}>Greenland</p>
    <p id="Guinea" onClick={hideToggle}>Guinea</p>
    <p id="Guinea-Bissau" onClick={hideToggle}>Guinea-Bissau</p>
    <p id="Honduras" onClick={hideToggle}>Honduras</p>
    <p id="Hong kong" onClick={hideToggle}>Hong Kong</p>
    <p id="Hungary" onClick={hideToggle}>Hungary</p>
    <p id="Iceland" onClick={hideToggle}>Iceland</p>
    <p id="India" onClick={hideToggle}>India</p>
    <p id="Indonesia" onClick={hideToggle}>Indonesia</p>
    <p id="Iran" onClick={hideToggle}>Iran, Islamic Republic of</p>
    <p id="Iraq" onClick={hideToggle}>Iraq</p>
    <p id="Ireland" onClick={hideToggle}>Ireland</p>
    <p id="Isreal" onClick={hideToggle}>Israel</p>
    <p id="Italy" onClick={hideToggle}>Italy</p>
    <p id="Jamaica" onClick={hideToggle}>Jamaica</p>
    <p id="Japan" onClick={hideToggle}>Japan</p>
    <p id="Jordan" onClick={hideToggle}>Jordan</p>
    <p id="Kazakhstan" onClick={hideToggle}>Kazakhstan</p>
    <p id="Kenya" onClick={hideToggle}>Kenya</p>
    <p id="Korea republic" onClick={hideToggle}>Korea, Republic of</p>
    <p id="Kosovo" onClick={hideToggle}>Kosovo</p>
    <p id="Kuwait" onClick={hideToggle}>Kuwait</p>
    <p id="Lebanon" onClick={hideToggle}>Lebanon</p>
    <p id="Lesotho" onClick={hideToggle}>Lesotho</p>
    <p id="Liberai" onClick={hideToggle}>Liberia</p>
    <p id="Libya" onClick={hideToggle}>Libyan Arab Jamahiriya</p>
    <p id="Liechtenstein" onClick={hideToggle}>Liechtenstein</p>
    <p id="Lithuania" onClick={hideToggle}>Lithuania</p>
    <p id="Luxembourg" onClick={hideToggle}>Luxembourg</p>
    <p id="Macao" onClick={hideToggle}>Macao</p>
    <p id="Macedonia" onClick={hideToggle}>Macedonia, the Former Yugoslav Republic of</p>
    <p id="Madagascar" onClick={hideToggle}>Madagascar</p>
    <p id="Malawi" onClick={hideToggle}>Malawi</p>
    <p id="Malaysia" onClick={hideToggle}>Malaysia</p>
    <p id="Maldives" onClick={hideToggle}>Maldives</p>
    <p id="Mali" onClick={hideToggle}>Mali</p>
    <p id="Malta" onClick={hideToggle}>Malta</p>
    <p id="Mexico" onClick={hideToggle}>Mexico</p>
    <p id="Moldova" onClick={hideToggle}>Moldova, Republic of</p>
    <p id="Monaco" onClick={hideToggle}>Monaco</p>
    <p id="Morocco" onClick={hideToggle}>Morocco</p>
    <p id="Mozambique" onClick={hideToggle}>Mozambique</p>
    <p id="Namibia" onClick={hideToggle}>Namibia</p>
    <p id="NepaNetherlands" onClick={hideToggle}>Nepal</p>
    <p id="" onClick={hideToggle}>Netherlands</p>
    <p id="New zealand" onClick={hideToggle}>New Zealand</p>
    <p id="Niger" onClick={hideToggle}>Niger</p>
    <p id="Nigerai" onClick={hideToggle}>Nigeria</p>
    <p id="Norway" onClick={hideToggle}>Norway</p>
    <p id="Oman" onClick={hideToggle}>Oman</p>
    <p id="Pakistan" onClick={hideToggle}>Pakistan</p>
    <p id="Panama" onClick={hideToggle}>Panama</p>
    <p id="Papua New Guinea" onClick={hideToggle}>Papua New Guinea</p>
    <p id="Paraguay" onClick={hideToggle}>Paraguay</p>
    <p id="Peru" onClick={hideToggle}>Peru</p>
    <p id="Phillippines" onClick={hideToggle}>Philippines</p>
    <p id="Poland" onClick={hideToggle}>Poland</p>
    <p id="Potugal" onClick={hideToggle}>Portugal</p>
    <p id="Puerto rico" onClick={hideToggle}>Puerto Rico</p>
    <p id="Qatar" onClick={hideToggle}>Qatar</p>
    <p id="Romania" onClick={hideToggle}>Romania</p>
    <p id="Russian" onClick={hideToggle}>Russian Federation</p>
    <p id="Rwanda" onClick={hideToggle}>Rwanda</p>
    <p id="Saudi Arabia" onClick={hideToggle}>Saudi Arabia</p>
    <p id="Sengal" onClick={hideToggle}>Senegal</p>
    <p id="Serbia" onClick={hideToggle}>Serbia</p>
    <p id="Serbia" onClick={hideToggle}>Serbia and Montenegro</p>
    <p id="Seychelles" onClick={hideToggle}>Seychelles</p>
    <p id="Sierra Leone" onClick={hideToggle}>Sierra Leone</p>
    <p id="Singapore" onClick={hideToggle}>Singapore</p>
    <p id="Solvakia" onClick={hideToggle}>Slovakia</p>
    <p id="Solvenia" onClick={hideToggle}>Slovenia</p>
    <p id="Somalia" onClick={hideToggle}>Somalia</p>
    <p id="South Africa" onClick={hideToggle}>South Africa</p>
    <p id="South sudan" onClick={hideToggle}>South Sudan</p>
    <p id="Spain" onClick={hideToggle}>Spain</p>
    <p id="Sri Lanka" onClick={hideToggle}>Sri Lanka</p>
    <p id="Sudan" onClick={hideToggle}>Sudan</p>
    <p id="Swaziland" onClick={hideToggle}>Swaziland</p>
    <p id="Sweden" onClick={hideToggle}>Sweden</p>
    <p id="Switzerland" onClick={hideToggle}>Switzerland</p>
    <p id="Syria" onClick={hideToggle}>Syrian Arab Republic</p>
    <p id="Taiwan" onClick={hideToggle}>Taiwan, Province of China</p>
    <p id="Tanzania" onClick={hideToggle}>Tanzania, United Republic of</p>
    <p id="Thailand" onClick={hideToggle}>Thailand</p>
    <p id="Togo" onClick={hideToggle}>Togo</p>
    <p id="Tunisia" onClick={hideToggle}>Tunisia</p>
    <p id="Turkey" onClick={hideToggle}>Turkey</p>
    <p id="Uganda" onClick={hideToggle}>Uganda</p>
    <p id="Ukraine" onClick={hideToggle}>Ukraine</p>
    <p id="United Arab Emirates" onClick={hideToggle}>United Arab Emirates</p>
    <p id="United Kingdom" onClick={hideToggle}>United Kingdom</p>
    <p id="United state" onClick={hideToggle}>United States</p>
    <p id="Uruguay" onClick={hideToggle}>Uruguay</p>
    <p id="Uzbestikan" onClick={hideToggle}>Uzbekistan</p>
    <p id="Yemen" onClick={hideToggle}>Yemen</p>
    <p id="Zambia" onClick={hideToggle}>Zambia</p>
    <p id="Zimbabwe" onClick={hideToggle}>Zimbabwe</p>
    </div>
    </div> : <div className={style.selectedOption}>
        <input id="country" name="country" placeholder='select your country' value={inputValue}></input> 
        <img src={arrow} alt='arrow down' onClick={showOptions}></img> 
    </div> }
    </div>
}
export default Countries