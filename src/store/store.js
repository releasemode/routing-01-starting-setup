import {createStore} from 'vuex'

const store= createStore({
    state(){
        return{
            teams: [
                { id: 't1', name: 'Frontend Engineers1', members: ['u1', 'u2'] },
                { id: 't2', name: 'Backend Engineers1', members: ['u1', 'u2', 'u3'] },
                { id: 't3', name: 'Client Consulting1', members: ['u4', 'u5'] },
                { id: 't4', name: 'Frontend Engineers2', members: ['u1', 'u2'] },
                { id: 't5', name: 'Backend Engineers2', members: ['u1', 'u2', 'u3'] },
                { id: 't6', name: 'Client Consulting2', members: ['u4', 'u5'] },
                { id: 't7', name: 'Frontend Engineers3', members: ['u1', 'u2'] },
                { id: 't8', name: 'Backend Engineers3', members: ['u1', 'u2', 'u3'] },
                { id: 't9', name: 'Client Consulting3', members: ['u4', 'u5'] },
                { id: 't10', name: 'Frontend Engineers4', members: ['u1', 'u2'] },
                { id: 't12', name: 'Backend Engineers4', members: ['u1', 'u2', 'u3'] },
                { id: 't13', name: 'Client Consulting4', members: ['u4', 'u5'] },
                { id: 't14', name: 'Frontend Engineers5', members: ['u1', 'u2'] },
                { id: 't15', name: 'Backend Engineers5', members: ['u1', 'u2', 'u3'] },
                { id: 't16', name: 'Client Consulting5', members: ['u4', 'u5'] },
                { id: 't17', name: 'Frontend Engineers6', members: ['u1', 'u2'] },
                { id: 't18', name: 'Backend Engineers6', members: ['u1', 'u2', 'u3'] },
                { id: 't19', name: 'Client Consulting6', members: ['u4', 'u5'] },
              ],
              users: [
                { id: 'u1', fullName: 'Max Schwarz1', role: 'Engineer' },
                { id: 'u2', fullName: 'Praveen Kumar2', role: 'Engineer' },
                { id: 'u3', fullName: 'Julie Jones3', role: 'Engineer' },
                { id: 'u4', fullName: 'Alex Blackfield4', role: 'Consultant' },
                { id: 'u5', fullName: 'Marie Smith5', role: 'Consultant' },
                { id: 'u6', fullName: 'Max Schwarz6', role: 'Engineer' },
                { id: 'u7', fullName: 'Praveen Kumar7', role: 'Engineer' },
                { id: 'u8', fullName: 'Julie Jones8', role: 'Engineer' },
                { id: 'u9', fullName: 'Alex Blackfield9', role: 'Consultant' },
                { id: 'u10', fullName: 'Marie Smith10', role: 'Consultant' },
                { id: 'u11', fullName: 'Max Schwarz11', role: 'Engineer' },
                { id: 'u12', fullName: 'Praveen Kumar12', role: 'Engineer' },
                { id: 'u13', fullName: 'Julie Jones13', role: 'Engineer' },
                { id: 'u14', fullName: 'Alex Blackfield14', role: 'Consultant' },
                { id: 'u15', fullName: 'Marie Smith15', role: 'Consultant' },
                { id: 'u16', fullName: 'Max Schwarz16', role: 'Engineer' },
                { id: 'u17', fullName: 'Praveen Kumar17', role: 'Engineer' },
                { id: 'u18', fullName: 'Julie Jones18', role: 'Engineer' },
                { id: 'u19', fullName: 'Alex Blackfield19', role: 'Consultant' },
                { id: 'u20', fullName: 'Marie Smith20', role: 'Consultant' },
              ],
        }
    },
    getters:{
        teams(state){
            return state.teams;
        },
        users(state){
            return state.users;
        },
        teamMembers:(_,getters)=>(teamId)=>{
            
            const members=[];
            const teams=getters.teams;
            const users= getters.users;
            var selectedTeams = teams.find(t=>t.id===teamId);
                selectedTeams.members.forEach(teamId => {
                members.push(users.find(u=>u.id===teamId));
            });
            console.log(members);
            return members;
        }

    }
})

export default store;