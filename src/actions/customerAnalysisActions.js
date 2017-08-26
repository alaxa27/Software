import axios from 'axios'

// export function resetCustomerAnalysis() {
//   return function(dispatch) {
//     dispatch({
//       type: "RESET_CUSTOMER_ANALYSIS"
//     })
//   }
// }

export function fetchCustomerAnalysis(text) {
  //Need AJAX Here. If it works I think I need to dispatch another action.
  // Let's say GET_TEXT_SENTIMENT_FULFILLED...
  return function(dispatch) {

    dispatch({
      type: "FETCH_CUSTOMER_ANALYSIS"
    })

    axios("https://aipcloud.sakme.ch/analyze/customer", {
        method: 'post',
        data: {
          text: text
        },
        auth: {
          username: 'text@jdc.fr',
          password: 'jdc'
        }

      })
      .then((res) => {
        console.log("Response", res);
        dispatch({
          type: "FETCH_CUSTOMER_ANALYSIS_FULFILLED",
          payload: res.data
        })
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: "FETCH_CUSTOMER_ANALYSIS_REJECTED",
          payload: err
        })
      })
  }
}
