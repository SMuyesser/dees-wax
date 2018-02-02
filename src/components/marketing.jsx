import React from 'react';
import './marketing.css';
const potDrip = require('../images/IMG957811.jpg');
const sugar = require('../images/IMG953797.jpg');
const stubble = require('../images/IMG953193.jpg');

const Marketing = () => 
  <div className="row">
    <div className="col-lg-4">
      <img className="rounded marketing-pic" src={potDrip} alt="Generic placeholder" width="140" height="140" />
      <h2>Wax</h2>
      <p>Wax wax wax wax wax wax wax wax wax wax wax wax wax wax wax wax wax wax wax wax</p>
      <p><a className="btn btn-secondary" href="" role="button">View details &raquo;</a></p>
    </div>{/*<!-- /.col-lg-4 -->*/}
    <div className="col-lg-4">
      <img className="rounded marketing-pic" src={sugar} alt="Generic placeholder" width="140" height="140" />
      <h2>Sugar</h2>
      <p>Sugar sugar sugar sugar sugar sugar sugar sugar sugar sugar sugar sugar sugar sugar sugar sugar </p>
      <p><a className="btn btn-secondary" href="" role="button">View details &raquo;</a></p>
    </div>{/*<!-- /.col-lg-4 -->*/}
    <div className="col-lg-4">
      <img className="rounded marketing-pic" src={stubble} alt="Generic placeholder" width="140" height="140" />
      <h2>Hair</h2>
      <p>Hair hair hair hair hair hair hair hair hair hair hair hair hair hair hair hair hair hair hair</p>
      <p><a className="btn btn-secondary" href="" role="button">View details &raquo;</a></p>
    </div>{/*<!-- /.col-lg-4 -->*/}
  </div>

export default Marketing;