
  
/* vsdoc for _global_ */

(function (window) {
    

    window._global_ = {
        /// <summary></summary>
        /// <returns type="_global_"/>
                
    };

    var $x = window._global_;
    $x.__namespace = "true";
    $x.__typeName = "_global_";
})(this);

  

  
/* vsdoc for atropa */

(function (window) {
    

    window.atropa = {
        /// <summary></summary>
        /// <field name="data" type="">Container for gobal data related to the classes and functions.</field>
        /// <field name="inquire" type="">Container for functions that test the state of inputs.</field>
        /// <returns type="atropa"/>
                
        supportCheck: function(className, errorMessage) {
            /// <summary>Checks whether this class has been marked as unsupported and throws an 
            ///  error if it has.</summary>
            /// <param name="className" type="String">The name of the class.</param>
            /// <param name="errorMessage" type="String">Optional. A custom error message. Defaults to
            ///  atropa.data[className].error</param>
        }, 
        
        requires: function(className, requirementFn, errorMessage) {
            /// <summary>Pushes a requirement check into atropa.data.requirements. The test
            ///  tests whether the class is supported in this environment. Sets
            ///  atropa.data[className]&apos;s support to unsupported and error to errorMessage
            ///  if the requirementFn returns false. The requirement checks will all be run
            ///  after the library has loaded.</summary>
            /// <param name="className" type="String">The name of the class.</param>
            /// <param name="requirementFn" type="Function">A function to test whether or not the class
            ///  is supported in this environment. If supported, returns true otherwise
            ///  return false.</param>
            /// <param name="errorMessage" type="String">The error message to use when this class or its
            ///  methods are called in unsupported environments. Defaults to:
            ///  &apos;The atropa.&apos; + className + &apos; class is unsupported in this environment.&apos;;</param>
        }
        
    };

    var $x = window.atropa;
    $x.__namespace = "true";
    $x.__typeName = "atropa";
})(this);

  

  
/* vsdoc for atropa.data */

(function (window) {
    window.atropa = window.atropa || {};

    window.atropa.data = {
        /// <summary></summary>
        /// <returns type="atropa.data"/>
                
    };

    var $x = window.atropa.data;
    $x.__namespace = "true";
    $x.__typeName = "atropa.data";
})(this);

  

  
/* vsdoc for atropa.inquire */

(function (window) {
    window.atropa = window.atropa || {};

    window.atropa.inquire = {
        /// <summary></summary>
        /// <returns type="atropa.inquire"/>
                
        isNull: function(x) {
            /// <summary>Checks whether the input is null.</summary>
            /// <param name="x" type="Mixed">Any input that may or may not be null.</param>
            /// <returns type="Boolean">Returns true if x === null.</returns>
        }, 
        
        isObject: function(x) {
            /// <summary>Checks whether the input is an object.</summary>
            /// <param name="x" type="Mixed">Any input that may or may not be an object.</param>
            /// <returns type="Boolean">Returns true if typeof(x) === &apos;object&apos;.</returns>
        }, 
        
        isObjectNotNull: function(x) {
            /// <summary>Checks whether the input is both an object and not null.</summary>
            /// <param name="x" type="Mixed">Any input that may or may not be both an
            /// object and null.</param>
            /// <returns type="Boolean">Returns true if x is both an object and
            /// not null. (null is an object).</returns>
        }, 
        
        hasProperty: function(obj, prop) {
            /// <summary>Checks an object for the existence of a property
            /// regardless of whether the property was inherited
            /// or not.</summary>
            /// <param name="obj" type="Object">An object which may or may not
            /// have the property identified by prop.</param>
            /// <param name="prop" type="String">A string value representing the
            /// name of the property.</param>
            /// <returns type="Boolean">Returns true if obj.prop exists,
            /// otherwise returns false.</returns>
        }, 
        
        isEmptyString: function(str) {
            /// <summary>Checks whether the input is an empty string.</summary>
            /// <param name="str" type="String">The string you want to know about</param>
            /// <returns type="Boolean">Returns true if str is an empty string,
            ///  otherwise returns false.</returns>
        }
        
    };

    var $x = window.atropa.inquire;
    $x.__namespace = "true";
    $x.__typeName = "atropa.inquire";
})(this);

  

