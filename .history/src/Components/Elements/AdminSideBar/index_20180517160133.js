import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NavLink } from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import { Menu, MenuItem } from 'material-ui/Menu'
import Person from 'material-ui/svg-icons/social/person'
import Info from 'material-ui/svg-icons/action/info'
import FormatListBulleted from 'material-ui/svg-icons/editor/format-list-bulleted'
import PlayListAdd from 'material-ui/svg-icons/av/playlist-add'
import { closeSideBar } from '../../../Actions'
import sideBarElements from './SideBarElements'
import './style.css'


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        closeSideBar,
    }, dispatch)
}

const mapStateToProps = (state) => {
    return {
        toggleSideBar: state.toggleSideBar,
    }
}

this.handleMenuClick = (e) => {
    console.log(e.target)
    e.target.className = 'actives arrowRight'
}

this.handleMenuFocus = () => {
    console.log('***********')
}

const AdminSideBar = (props) => {
    return (
        <Drawer
            open={props.toggleSideBar}
            zDepth={0}
            docked
        >
            {console.log(props)}
            <AppBar
                title="Options"
                showMenuIconButton
                onLeftIconButtonClick={props.closeSideBar}
                style={{ height: '64px' }}
            />
            <Menu>
                {
                    sideBarElements
                        .map((element) => {
                            return (
                                <NavLink
                                    to={element.to}
                                    className="showUnderline"
                                    key={element.name}
                                >
                                    <MenuItem
                                        focusState="none"
                                        onClick={e => this.handleMenuClick(e)}
                                        leftIcon={element.leftIcon}
                                        key={element}
                                    >
                                        {element.name}
                                    </MenuItem>
                                </NavLink>
                            )
                        })
                }

                {/* <NavLink to="/personalData" className="showUnderline" >
                    <MenuItem
                        onClick={e => this.handleMenuClick(e)}
                        leftIcon={<Person />}
                    >
                    Personal Data
                    </MenuItem>
                </NavLink>
                <NavLink to="/problemList" className="showUnderline">
                    <MenuItem
                        onClick={e => this.handleMenuClick(e)}
                        leftIcon={<FormatListBulleted />}
                    >
                    Problem List
                    </MenuItem>
                </NavLink>
                <NavLink to="/roomList" className="showUnderline">
                    <MenuItem
                        onClick={e => this.handleMenuClick(e)}
                        leftIcon={<FormatListBulleted />}
                    >
                    Room List
                    </MenuItem>
                </NavLink>
                <NavLink to="/createProblem" className="showUnderline">
                    <MenuItem
                        onClick={e => this.handleMenuClick(e)}
                        leftIcon={<PlayListAdd />}
                    >
                    Create Problem
                    </MenuItem>
                </NavLink>
                <NavLink to="/createRoom" className="showUnderline">
                    <MenuItem
                        onClick={e => this.handleMenuClick(e)}
                        leftIcon={<PlayListAdd />}
                    >
                    Create Room
                    </MenuItem>
                </NavLink>
                <NavLink to="/about" className="showUnderline">
                    <MenuItem
                        onClick={e => this.handleMenuClick(e)}
                        leftIcon={<Info />}
                    >
                    About
                    </MenuItem>
            </NavLink> */}
            </Menu>
        </Drawer>
    )
}

AdminSideBar.propTypes = {
    toggleSideBar: PropTypes.bool.isRequired,
    closeSideBar: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminSideBar)

