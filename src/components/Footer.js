import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <hr className="border-success"/>
                <footer class="page-footer font-small blue">
                    <div class="footer-copyright text-center py-3">© 2020 Copyright:
                        <a href="#"> Muhamad Hilman</a>
                    </div>
                </footer>
            </div>
        )
    }
}
