function skillsMember() {
  return {
    name: 'skillsMember',
    restrict: 'E',
    templateUrl: 'app/components/members/skillsMember.html',
    scope: {
      member: '='
    },
    link: function(scope, element, attrs) {
      scope.member.skills = scope.member.skills || [];
      scope.addSkill = function() {
        scope.member.skills.push(scope.skill);
        scope.skill = '';
      };
      scope.removeSkill = function(index) {
        scope.member.skills.splice(index, 1);
      };
    }
  };
}