function emailTemplateCreator(customerName, service, location, contactNumber) {
    return `
    <table width="100%" height="150" class="c3704 c7499" style="box-sizing: border-box; height: 150px; margin: 0 auto 10px auto; padding: 5px 5px 5px 5px; width: 100%;">
  <tbody class="c7507" style="box-sizing: border-box;">
    <tr class="c7515" style="box-sizing: border-box;">
      <td valign="top" class="c3728 c7523" style="box-sizing: border-box; font-size: 12px; font-weight: 300; vertical-align: top; color: rgb(111, 119, 125); margin: 0; padding: 0;">
        <div class="c3794 c7531" style="box-sizing: border-box; padding: 10px; text-align: center; border: 3px solid #3b98de;">
          <strong class="c7539" style="box-sizing: border-box;"><span class="c7547" style="box-sizing: border-box; font-size: 22px;"><span class="c7555" style="box-sizing: border-box; background-color: #ffffff;">NEW VEHICLE BOOKING</span></span></strong>
        </div>
        <table width="100%" height="150" class="c4123 c7585" style="box-sizing: border-box; height: 150px; margin: 0 auto 10px auto; padding: 5px 5px 5px 5px; width: 100%;">
          <tbody class="c7593" style="box-sizing: border-box;">
            <tr class="c7601" style="box-sizing: border-box;">
              <td width="50%" valign="top" class="c4147 c7609" style="box-sizing: border-box; font-size: 12px; font-weight: 300; vertical-align: top; color: rgb(111, 119, 125); margin: 0; padding: 0; width: 50%;">
                <table width="100%" class="list-item c7617" style="box-sizing: border-box; height: auto; width: 100%; margin-top: 0px; margin-right: auto; margin-bottom: 10px; margin-left: auto; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px;">
                  <tbody class="c7625" style="box-sizing: border-box;">
                    <tr class="c7633" style="box-sizing: border-box;">
                      <td bgcolor="rgb(255, 255, 255)" class="list-item-cell c7641" style="box-sizing: border-box; background-color: rgb(255, 255, 255); border-top-left-radius: 3px; border-top-right-radius: 3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px; overflow-x: hidden; overflow-y: hidden; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;">
                        <table width="100%" height="150" class="list-item-content c7649" style="box-sizing: border-box; border-collapse: collapse; margin-top: 0px; margin-right: auto; margin-bottom: 0px; margin-left: auto; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; height: 150px; width: 100%;">
                          <tbody class="c7657" style="box-sizing: border-box;">
                            <tr class="list-item-row c7665" style="box-sizing: border-box;">
                              <td width="70%" class="list-cell-right c7673" style="box-sizing: border-box; width: 70%; color: rgb(111, 119, 125); font-size: 13px; line-height: 20px; padding-top: 10px; padding-right: 20px; padding-bottom: 0px; padding-left: 20px;">
                                <h1 class="card-title c7681" style="box-sizing: border-box; font-size: 25px; font-weight: 300; color: rgb(68, 68, 68);">Customer Name
                                </h1>
                                <p class="card-text c7690" style="box-sizing: border-box;">
                                  <span class="c7698" style="box-sizing: border-box; color: #1abc9c;"><span class="c7706" style="box-sizing: border-box; font-size: 20px;">${customerName}</span></span>
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table width="100%" class="list-item c7791" style="box-sizing: border-box; height: auto; width: 100%; margin-top: 0px; margin-right: auto; margin-bottom: 10px; margin-left: auto; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px;">
                  <tbody class="c7799" style="box-sizing: border-box;">
                    <tr class="c7807" style="box-sizing: border-box;">
                      <td bgcolor="rgb(255, 255, 255)" class="list-item-cell c7815" style="box-sizing: border-box; background-color: rgb(255, 255, 255); border-top-left-radius: 3px; border-top-right-radius: 3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px; overflow-x: hidden; overflow-y: hidden; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;">
                        <table width="100%" height="150" class="list-item-content c7823" style="box-sizing: border-box; border-collapse: collapse; margin-top: 0px; margin-right: auto; margin-bottom: 0px; margin-left: auto; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; height: 150px; width: 100%;">
                          <tbody class="c7831" style="box-sizing: border-box;">
                            <tr class="list-item-row c7839" style="box-sizing: border-box;">
                              <td width="70%" class="list-cell-right c7847" style="box-sizing: border-box; width: 70%; color: rgb(111, 119, 125); font-size: 13px; line-height: 20px; padding-top: 10px; padding-right: 20px; padding-bottom: 0px; padding-left: 20px;">
                                <h1 class="card-title c7855" style="box-sizing: border-box; font-size: 25px; font-weight: 300; color: rgb(68, 68, 68);">Service
                                </h1>
                                <p class="card-text c7864" style="box-sizing: border-box;">
                                  <span class="c7872" style="box-sizing: border-box; font-size: 20px;"><span class="c7880" style="box-sizing: border-box; color: #1abc9c;">${service}</span></span>
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table width="100%" class="list-item c7965" style="box-sizing: border-box; height: auto; width: 100%; margin-top: 0px; margin-right: auto; margin-bottom: 10px; margin-left: auto; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px;">
                  <tbody class="c7973" style="box-sizing: border-box;">
                    <tr class="c7981" style="box-sizing: border-box;">
                      <td bgcolor="rgb(255, 255, 255)" class="list-item-cell c7989" style="box-sizing: border-box; background-color: rgb(255, 255, 255); border-top-left-radius: 3px; border-top-right-radius: 3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px; overflow-x: hidden; overflow-y: hidden; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;">
                        <table width="100%" height="150" class="list-item-content c7997" style="box-sizing: border-box; border-collapse: collapse; margin-top: 0px; margin-right: auto; margin-bottom: 0px; margin-left: auto; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; height: 150px; width: 100%;">
                          <tbody class="c8005" style="box-sizing: border-box;">
                            <tr class="list-item-row c8013" style="box-sizing: border-box;">
                              <td width="70%" class="list-cell-right c8021" style="box-sizing: border-box; width: 70%; color: rgb(111, 119, 125); font-size: 13px; line-height: 20px; padding-top: 10px; padding-right: 20px; padding-bottom: 0px; padding-left: 20px;">
                                <h1 class="card-title c8029" style="box-sizing: border-box; font-size: 25px; font-weight: 300; color: rgb(68, 68, 68);">Location
                                </h1>
                                <p class="card-text c8038" style="box-sizing: border-box;">
                                  <span class="c8046" style="box-sizing: border-box; color: #1abc9c;"><span class="c8054" style="box-sizing: border-box; font-size: 18px;">${location}</span></span>
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table width="100%" class="list-item c8139" style="box-sizing: border-box; height: auto; width: 100%; margin-top: 0px; margin-right: auto; margin-bottom: 10px; margin-left: auto; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px;">
                  <tbody class="c8147" style="box-sizing: border-box;">
                    <tr class="c8155" style="box-sizing: border-box;">
                      <td bgcolor="rgb(255, 255, 255)" class="list-item-cell c8163" style="box-sizing: border-box; background-color: rgb(255, 255, 255); border-top-left-radius: 3px; border-top-right-radius: 3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px; overflow-x: hidden; overflow-y: hidden; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;">
                        <table width="100%" height="150" class="list-item-content c8171" style="box-sizing: border-box; border-collapse: collapse; margin-top: 0px; margin-right: auto; margin-bottom: 0px; margin-left: auto; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; height: 150px; width: 100%;">
                          <tbody class="c8179" style="box-sizing: border-box;">
                            <tr class="list-item-row c8187" style="box-sizing: border-box;">
                              <td width="70%" class="list-cell-right c8195" style="box-sizing: border-box; width: 70%; color: rgb(111, 119, 125); font-size: 13px; line-height: 20px; padding-top: 10px; padding-right: 20px; padding-bottom: 0px; padding-left: 20px;">
                                <h1 class="card-title c8203" style="box-sizing: border-box; font-size: 25px; font-weight: 300; color: rgb(68, 68, 68);">Call
                                </h1>
                                <a href="tel:+91${contactNumber}" class="c6777 c8212" style="box-sizing: border-box; display: inline-block; padding: 5px; min-height: 50px; min-width: 50px;"><div class="c7019 c8222" style="box-sizing: border-box; padding: 10px;">
                                  <span class="c8230" style="box-sizing: border-box; font-size: 20px;"><strong class="c8238" style="box-sizing: border-box;">Call ${contactNumber}</strong></span>
                                  </div></a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>`
}

module.exports = emailTemplateCreator;