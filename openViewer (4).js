$(document).ready(function() {
	$("#ell-main").load("/sites/cf/Resources/NCES%20NAEP/subject/studies/ELL/content.html", function() {
		initELLMain();
	});
});

function initELLMain() {
	var HOME_HEIGHT = 1460;
	var PAGE1_HEIGHT = 1335;
	var PAGE2_HEIGHT = 1000;
	var PAGE3_HEIGHT = 1390;
	initSlide();
	initInclusion();
	initPerformance();
	initPlaces();
	initEthnicity();

	$(".grade-sel").select2({
		minimumResultsForSearch : -1
	});
	$('#results .bar-item').click(function(event) {
		event.preventDefault();

		$(this).toggleClass('bar-open');

		$('#results .bar-item').not(this).each(function(i) {
			$(this).removeClass('bar-open');
			$("#" + $(this).attr("id") + "-message").hide();
		});

		$("#" + $(this).attr("id") + "-message").slideToggle();
	});

	function initSlide() {
		var i = 0;
		var iCurrent = 1;
		var iTotal = 4;

		checkCurrent();

		$("#image_" + iCurrent).show();

		$("#nav_1").click(function(event) {
			event.preventDefault();
			show(1);
		});

		$("#nav_2").click(function(event) {
			event.preventDefault();
			show(2);
		});

		$("#nav_3").click(function(event) {
			event.preventDefault();
			show(3);
		});

		$("#nav_4").click(function(event) {
			event.preventDefault();
			show(4);
		});

		$("#nav_5").click(function(event) {
			event.preventDefault();
			show(5);
		});

		shortcut.add("Right", function() {
			next();
			stopCycle();
		});

		shortcut.add("Left", function() {
			prev();
			stopCycle();
		});

		function stopCycle() {
		}


		$('#next_key').click(function(event) {
			event.preventDefault();
			next();
			stopCycle();
		});

		$('#prev_key').click(function(event) {
			event.preventDefault();
			prev();
			stopCycle();
		});

		function checkCurrent() {
			switch (iCurrent) {
			case 1:
				//when showId == iCurrent
				$("#showcase-bg").height(HOME_HEIGHT);
				break;
			case 2:
				$("#showcase-bg").height(PAGE1_HEIGHT);
				break;
			case 3:
				$("#showcase-bg").height(PAGE2_HEIGHT);
				break;
			case 4:
				$("#showcase-bg").height(PAGE3_HEIGHT);
				break;
			case 5:
				$("#showcase-bg").height(PAGE4_HEIGHT);
			default:
				break;
			}
		}

		function next() {
			// console.log(iCurrent);
			//<!-- beging old codes -->
			if (iCurrent >= iTotal) {
				$("#image_1").show('slide', {
					direction : 'right'
				}, 1000);
				$("#image_" + iCurrent).hide('slide', {
					direction : 'left'
				}, 1000);
				iCurrent = 1;
			} else {
				$("#image_" + (iCurrent + 1)).show('slide', {
					direction : 'right'
				}, 1000);
				$("#image_" + iCurrent).hide('slide', {
					direction : 'left'
				}, 1000);
				iCurrent++;
			}
			//resetStatus(iCurrent);
			checkCurrent();
			$(".selected", "#header1").removeClass("selected");
			$("#nav_" + iCurrent).addClass("selected");
			//<!-- end -->
		}

		function prev() {
			if (iCurrent <= 1) {
				$("#image_" + iTotal).show('slide', {
					direction : 'left'
				}, 1000);
				$("#image_1").hide('slide', {
					direction : 'right'
				}, 1000);
				iCurrent = iTotal;
			} else {
				$("#image_" + (iCurrent - 1)).show('slide', {
					direction : 'left'
				}, 1000);
				$("#image_" + iCurrent).hide('slide', {
					direction : 'right'
				}, 1000);
				iCurrent--;
			}
			//resetStatus(iCurrent);
			checkCurrent();

			$(".selected", "#header1").removeClass("selected");
			$("#nav_" + iCurrent).addClass("selected");
		}

		function show(showId) {

			//resetStatus(showId);

			//
			if (showId == iCurrent) {
				return;
			}
			if (showId < iCurrent) {
				$("#image_" + showId).show('slide', {
					direction : 'left'
				}, 1000);
				$("#image_" + iCurrent).hide('slide', {
					direction : 'right'
				}, 1000);
				$("#sh_" + iCurrent).show();
			} else {
				$("#image_" + showId).show('slide', {
					direction : 'right'
				}, 1000);
				$("#image_" + iCurrent).hide('slide', {
					direction : 'left'
				}, 1000);
			}
			iCurrent = parseInt(showId);
			checkCurrent();

			$(".selectionHeader").hide();
			$(".selected", "#header1").removeClass("selected");
			if (iCurrent != 1) {
				$("#nav_" + iCurrent).addClass("selected");
			}
		}


		$('#imgDetail li img').hover(function() {
			$('#bigImg').attr('src', $(this).attr('src'));
		});
		$('#fig0Detail map area').hover(function() {
			$('#fig0emp').attr('src', $(this).attr('src'));
		});
		//$('#fig1Detail map area').hover(function () {
		//    $('#fig1emp').attr('src', $(this).attr('src'));
		//});
		$('#fig1Detail map area').click(function(e) {
			e.preventDefault();
			$('#fig1emp').attr('src', $(this).attr('src'));
		});
		//$('#fig2Detail map area').hover(function(){
		//    $('#fig2emp').attr('src',$(this).attr('src'));
		//});
		$('#fig2Detail map area').click(function(e) {
			e.preventDefault();
			$('#fig2emp').attr('src', $(this).attr('src'));
		});
		//$('#fig3Detail map area').hover(function(){
		//    $('#fig3emp').attr('src',$(this).attr('src'));
		//});
		$('#fig3Detail map area').click(function(e) {
			e.preventDefault();
			$('#fig3emp').attr('src', $(this).attr('src'));
		});

		//function resetStatus(showId) {
		//    if (parseInt(showId) == 5) {
		//        $image = $('#image_5');
		//        $('.bar-item', $image).each(
		//            function (i) {
		//                $(this).removeClass('sidebar-open');
		//            });
		//        $('.message', $image).each(
		//           function (i) {
		//               $(this).css('display', 'none');
		//           });
		//        $('#mathDetails').hide();
		//        $('#readingDetails').hide();
		//        $("#showcase-bg").height(PAGE3_HEIGHT);
		//    }
		//}

		$('#header2 .homeicon').on('click', function(e) {
			show(1);
		});
	}

	function initInclusion() {
		initData();
		function initData() {
			var $Part_I = $("#image_2 .Part_I");
			var $Part_II = $("#image_2 .Part_II");
			var $Part_III = $("#image_2 .Part_III");
			var $Part_IV = $("#image_2 .Part_IV");
			var Part_I = {};
			var Part_II = {};
			var Part_III = {};
			var Part_IV = {};

			//Part_I
			Part_I['G4_R'] = 'Of all students in the 4th-grade reading assessment in 2013...';
			Part_I['G4_M'] = 'Of all students in the 4th-grade mathematics assessment in 2013...';
			Part_I['G8_R'] = 'Of all students in the 8th-grade reading assessment in 2013...';
			Part_I['G8_M'] = 'Of all students in the 8th-grade mathematics assessment in 2013...';

			//Part_II image
			Part_II['G4_R'] = 'Grade4_Reading.png';
			Part_II['G4_M'] = 'Grade4_Mathematics.png';
			Part_II['G8_R'] = 'Grade8_Reading.png';
			Part_II['G8_M'] = 'Grade8_Mathematics.png';

			//Part_III
			Part_III['G4_R'] = 'In grade 4, reading...';
			Part_III['G4_M'] = 'In grade 4, mathematics...';
			Part_III['G8_R'] = 'In grade 8, reading...';
			Part_III['G8_M'] = 'In grade 8, mathematics...';

			//Part_IV
			Part_IV['G4_R'] = 'In grade 4, the percent of ELL students has continued to increase over each assessment year. Ten percent of participants in 2013 were ELL students, a signicant increase fromfive percen tin 1998.';
			Part_IV['G4_M'] = 'In grade 4, mathematics...';
			Part_IV['G8_R'] = 'In grade 8, reading...';
			Part_IV['G8_M'] = 'In grade 8, mathematics...';

			$('#image_2 .grade-sel').change(function(e) {
				var value = $(this).val();
				setContents(value);
			});
			function setContents(grade_subject) {
				var path = '/sites/cf/Resources/NCES%20NAEP/subject/studies/ELL/Images/grade_subject/Inclusion/';
				switch (parseInt(grade_subject)) {
				case 40:
					$Part_I.html(Part_I['G4_R']);
					$Part_II.attr('src', path + Part_II['G4_R']);
					$Part_III.html(Part_III['G4_R']);
					$Part_IV.html(Part_IV['G4_R']);
					break;
				case 41:
					$Part_I.html(Part_I['G4_M']);
					$Part_II.attr('src', path + Part_II['G4_M']);
					$Part_III.html(Part_III['G4_M']);
					$Part_IV.html(Part_IV['G4_M']);
					break;
				case 80:
					$Part_I.html(Part_I['G8_R']);
					$Part_II.attr('src', path + Part_II['G8_R']);
					$Part_III.html(Part_III['G8_R']);
					$Part_IV.html(Part_IV['G8_R']);
					break;
				case 81:
					$Part_I.html(Part_I['G8_M']);
					$Part_II.attr('src', path + Part_II['G8_M']);
					$Part_III.html(Part_III['G8_M']);
					$Part_IV.html(Part_IV['G8_M']);
					break;
				default:
					break;
				}
			}

			setContents($('#image_2 .grade-sel').val());
		}

	}

	function initPerformance() {
		var pageId = "#image_2";
		initData();

		function initData() {
			var $Part_I_Title = $(pageId + ' .Part_I_Title');
			var $Part_I_Text = $(pageId + ' .Part_I_Text');
			var $Part_I_Img = $(pageId + " .Part_I_Img");

			var $Part_II_Title = $(pageId + ' .Part_II_Title');
			var $Part_II_Text = $(pageId + " .Part_II_Text");
			var $Part_II_Img = $(pageId + " .Part_II_Img");

			var Part_I_Title = {};
			var Part_I_Text = {};
			var Part_I_Img = {};
			var Part_II_Title = {};
			var Part_II_Text = {};
			var Part_II_Img = {};

			//Part_I Titile
			Part_I_Title['G4_R'] = "Trend in grade 4 NAEP reading average scale scores for students who are identified as English language learners: Various years, 1998&ndash;2013";
			Part_I_Title['G8_R'] = "Trend in grade 8 NAEP reading average scale scores for students who are identified as English language learners: Various years, 1998&ndash;2013";
			Part_I_Title['G4_M'] = "Trend in grade 4 NAEP mathematics average scale scores for students who are identified as English language learners: Various years, 1996&ndash;2013"
			Part_I_Title['G8_M'] = "Trend in grade 8 NAEP mathematics average scale scores for students who are identified as English language learners: Various years, 1996&ndash;2013"

			//Part_I Text
			Part_I_Text['G4_R'] = "<br />From 1998 to 2013, grade 4 reading average scale scores for ELL students <span class='highlighted'>increased from 174 to 187</span>. The average score for ELL students in 2013 (187) was lower than that of non-ELL students (225).";
			Part_I_Text['G4_M'] = '<br />From 1996 to 2013, grade 4 mathematics average scale scores for ELL students <span class="highlighted">increased from 201 to 219</span>. The average score for ELL students in 2013 (219) was lower than that of  non-ELL students (244).';
			Part_I_Text['G8_R'] = '<br />From 1998 to 2013, grade 8 reading average scale scores for ELL students <span class="highlighted2">increased from 217 to 225</span>. The average score for ELL students in 2013 (225) was lower than that of non-ELL students (268).';
			Part_I_Text['G8_M'] = '<br />From 1996 to 2013, grade 8 mathematics average scale scores for ELL students <span class="highlighted2">increased from 226 to 245</span>. The average score for ELL students in 2013 (245) was lower than that of  non-ELL students (286).';

			//Part_I image
			Part_I_Img['G4_R'] = 'Grade4_Reading_AveSS.png';
			Part_I_Img['G4_M'] = 'Grade4_Mathematics_AveSS.png';
			Part_I_Img['G8_R'] = 'Grade8_Reading_AveSS.png';
			Part_I_Img['G8_M'] = 'Grade8_Mathematics_AveSS.png';

			//Part_II Titile
			Part_II_Title['G4_R'] = "Trend in grade 4 NAEP reading percentile scores for students who are identified as English language learners: Various years, 1998&ndash;2013";
			Part_II_Title['G8_R'] = "Trend in grade 8 NAEP reading percentile scores for students who are identified as English language learners: Various years, 1998&ndash;2013";
			Part_II_Title['G4_M'] = "Trend in grade 4 NAEP mathematics percentile score for students who are identified as English language learners: Various years, 1996&ndash;2013"
			Part_II_Title['G8_M'] = "Trend in grade 8 NAEP mathematics percentile score for students who are identified as English language learners: Various years, 1996&ndash;2013 "

			//Part_II Text
			Part_II_Text['G4_R'] = '<br />Scores for ELL students at the <span class="highlighted clickable">50th percentile</span> increased between 1998 and 2013, from <span class="highlighted">172 to 190</span>. Click the figure to learn more.';
			Part_II_Text['G4_M'] = '<br />Scores for ELL students at the <span class="highlighted clickable">10th percentile</span> increased between 1996 and 2013, from <span class="highlighted">166 to 183</span>. Click the figure to learn more.';
			Part_II_Text['G8_R'] = '<br />Scores for ELL students at the <span class="highlighted2 clickable">25th percentile</span> increased between 1998 and 2013, from <span class="highlighted2">194 to 204</span>. Click the figure to learn more.';
			Part_II_Text['G8_M'] = '<br />Scores for ELL students at the <span class="highlighted2 clickable">50th percentile</span> increased between 1996 and 2013, from <span class="highlighted2">227 to 246</span>. Click the figure to learn more.';

			//Part_II_Img
			Part_II_Img['G4_R'] = 'Grade4_Reading_AveSSByPerc.svg';
			Part_II_Img['G4_M'] = 'Grade4_Mathematics_AveSSByPerc.svg';
			Part_II_Img['G8_R'] = 'Grade8_Reading_AveSSByPerc.svg';
			Part_II_Img['G8_M'] = 'Grade8_Mathematics_AveSSByPerc.svg';

			$(pageId + ' .grade-sel').change(function(e) {
				var value = $(this).val();
				setContents(value);
			});

			function setContents(grade_subject) {
				var path = '/sites/cf/Resources/NCES%20NAEP/subject/studies/ELL/Images/grade_subject/Performance/';
				switch (parseInt(grade_subject)) {
				case 40:
					$Part_I_Title.html(Part_I_Title['G4_R']);
					$Part_I_Text.html(Part_I_Text['G4_R']);
					$Part_I_Img.attr('src', path + Part_I_Img['G4_R']);
					$Part_II_Title.html(Part_II_Title['G4_R']);
					$Part_II_Text.html(Part_II_Text['G4_R']);
					$Part_II_Img.load(path + Part_II_Img['G4_R'], attachSvgEvent);
					break;
				case 41:
					$Part_I_Title.html(Part_I_Title['G4_M']);
					$Part_I_Text.html(Part_I_Text['G4_M']);
					$Part_I_Img.attr('src', path + Part_I_Img['G4_M']);
					$Part_II_Title.html(Part_II_Title['G4_M']);
					$Part_II_Text.html(Part_II_Text['G4_M']);
					$Part_II_Img.load(path + Part_II_Img['G4_M'], attachSvgEvent);
					break;
				case 80:
					$Part_I_Title.html(Part_I_Title['G8_R']);
					$Part_I_Text.html(Part_I_Text['G8_R']);
					$Part_I_Img.attr('src', path + Part_I_Img['G8_R']);
					$Part_II_Title.html(Part_II_Title['G8_R']);
					$Part_II_Text.html(Part_II_Text['G8_R']);
					$Part_II_Img.load(path + Part_II_Img['G8_R'], attachSvgEvent);
					break;
				case 81:
					$Part_I_Title.html(Part_I_Title['G8_M']);
					$Part_I_Text.html(Part_I_Text['G8_M']);
					$Part_I_Img.attr('src', path + Part_I_Img['G8_M']);
					$Part_II_Title.html(Part_II_Title['G8_M']);
					$Part_II_Text.html(Part_II_Text['G8_M']);
					$Part_II_Img.load(path + Part_II_Img['G8_M'], attachSvgEvent);
					break;
				default:
					break;
				}
			}

			setContents($(pageId + ' .grade-sel').val());

		}

		//open the all,remove the all
		$('.showAll').click(function(e) {
			$('.col1,.col2,.col3,.col4,.col5,.col6,.col7,.col8,.row1,.row2,.row3,.row4,.row5,.row6,.row7,.row8').css('display', 'block');
		});

		function attachSvgEvent() {
			//click year
			$('.year').click(function(e) {
				if ($('<b></b>').addClass($(this).attr('class')).hasClass('one')) {
					reset();
					$(".col1").css('display', 'block');
				} else if ($('<b></b>').addClass($(this).attr('class')).hasClass('two')) {
					reset();
					$(".col2").css('display', 'block');
				} else if ($('<b></b>').addClass($(this).attr('class')).hasClass('three')) {
					reset();
					$(".col3").css('display', 'block');
				} else if ($('<b></b>').addClass($(this).attr('class')).hasClass('four')) {
					reset();
					$(".col4").css('display', 'block');
				} else if ($('<b></b>').addClass($(this).attr('class')).hasClass('five')) {
					reset();
					$(".col5").css('display', 'block');
				} else if ($('<b></b>').addClass($(this).attr('class')).hasClass('six')) {
					reset();
					$(".col6").css('display', 'block');
				} else if ($('<b></b>').addClass($(this).attr('class')).hasClass('seven')) {
					reset();
					$(".col7").css('display', 'block');
				} else if ($('<b></b>').addClass($(this).attr('class')).hasClass('eight')) {
					reset();
					$(".col8").css('display', 'block');
				}
			});
			//click percentile
			$('.percent').click(function(e) {
				if ($('<b></b>').addClass($(this).attr('class')).hasClass('one')) {
					reset();
					$(".row1").css('display', 'block');
				} else if ($('<b></b>').addClass($(this).attr('class')).hasClass('two')) {
					reset();
					$(".row2").css('display', 'block');
				} else if ($('<b></b>').addClass($(this).attr('class')).hasClass('three')) {
					reset();
					$(".row3").css('display', 'block');
				} else if ($('<b></b>').addClass($(this).attr('class')).hasClass('four')) {
					reset();
					$(".row4").css('display', 'block');
				} else if ($('<b></b>').addClass($(this).attr('class')).hasClass('five')) {
					reset();
					$(".row5").css('display', 'block');
				}
			});

			$('.end').click(function(e) {
				reset();
			});

			$('.clickable').click(function(e) {
				if ($(this).text() == "90th percentile") {
					reset();
					$(".row5").css('display', 'block');
				} else if ($(this).text() == "70th percentile") {
					reset();
					$(".row4").css('display', 'block');
				} else if ($(this).text() == "50th percentile") {
					reset();
					$(".row3").css('display', 'block');
				} else if ($(this).text() == "25th percentile") {
					reset();
					$(".row2").css('display', 'block');
				} else {
					reset();
					$(".row1").css('display', 'block');
				}
			});
		}

		function reset() {
			return $('.col1,.col2,.col3,.col4,.col5,.col6,.col7,.col8,.row1,.row2,.row3,.row4,.row5,.row6,.row7,.row8').css('display', 'none');
		}

	}

	function initPlaces() {
		var pageId = "#image_3";
		initData();
		function initData() {
			var $Part_Title = $(pageId + ' .Part_Title');
			var $Part_Img = $(pageId + " .Part_Img");
			//var $Part_II = $(pageId + " .Part_II");
			var $Part_Text_I = $(pageId + " .Part_Text_I");
			//var $Part_III = $(pageId + " .Part_III");
			var $Part_Text_II = $(pageId + " .Part_Text_II");

			var Part_Title = {};
			var Part_Img = {};
			var Part_Text_I = {};
			var Part_Text_II = {};

			//Title
			Part_Title['G4_R'] = 'Average scale scores for grade 4 students identified as English language learners in NAEP reading, by state/jurisdiction: 2013';
			Part_Title['G4_M'] = 'Average scale scores for grade 4 students identified as English language learners in NAEP mathematics, by state/jurisdiction: 2013';
			Part_Title['G8_R'] = 'Average scale scores for grade 8 students identified as English language learners in NAEP reading, by state/jurisdiction: 2013';
			Part_Title['G8_M'] = 'Average scale scores for grade 8 students identified as English language learners in NAEP mathematics, by state/jurisdiction: 2013';

			//image
			Part_Img['G4_R'] = 'Grade4_Reading.png';
			Part_Img['G4_M'] = 'Grade4_Mathematics.png';
			Part_Img['G8_R'] = 'Grade8_Reading.png';
			Part_Img['G8_M'] = 'Grade8_Mathematics.png';

			//Part_Text_I text
			Part_Text_I['G4_R'] = 'In 2013, ELL students in <span class="highlighted">12 states</span>  scored above the national average for 4th-grade reading (187), while students in <span class="highlighted">12 states</span> scored significantly below the national average. Five states had insufficient data to permit a reliable estimate.';
			Part_Text_I['G4_M'] = 'In 2013, ELL students in <span class="highlighted">10 states</span> scored above the national average for 4th-grade mathematics (219), while students in <span class="highlighted">13 states</span> scored significantly below the national average. Five states had insufficient data to permit a reliable estimate.';
			Part_Text_I['G8_R'] = 'In 2013, ELL students in <span class="highlighted2">9 states</span> scored above the national average for 8th-grade reading (225), while students in <span class="highlighted2">5 states</span> scored significantly below the national average. Eighteen states had insufficient data to permit a reliable estimate.';
			Part_Text_I['G8_M'] = 'In 2013, ELL students in <span class="highlighted2">8 states</span> scored above the national average for 8th-grade mathematics (245), while students in <span class="highlighted2">7 states</span> scored significantly below the national average. Sixteen states had insufficient data to permit a reliable estimate.';

			//Part_Text_II text
			Part_Text_II['G4_R'] = 'The percentage of ELL students who live in the West is greater (<span class="highlighted">43%</span>) than the percentage of non-ELL students (<span class="highlighted">22%</span>). A greater percentage of ELL students live in cities (<span class="highlighted">46%</span>) than non-ELL students (<span class="highlighted">28%</span>).';
			Part_Text_II['G4_M'] = 'The percentage of ELL students who live in the West is greater (<span class="highlighted">41%</span>) than the percentage of non-ELL students (<span class="highlighted">22%</span>). A greater percentage of ELL students live in cities (<span class="highlighted">47%</span>) than non-ELL students (<span class="highlighted">28%</span>).';
			Part_Text_II['G8_R'] = 'The percentage of ELL students who live in the West is greater (<span class="highlighted2">43%</span>) than the percentage of non-ELL students (<span class="highlighted2">24%</span>). A greater percentage of ELL students live in cities (<span class="highlighted2">46%</span>) than non-ELL students (<span class="highlighted2">27%</span>).';
			Part_Text_II['G8_M'] = 'The percentage of ELL students who live in the West is greater (<span class="highlighted2">43%</span>) than the percentage of non-ELL students (<span class="highlighted2">24%</span>). A greater percentage of ELL students live in cities (<span class="highlighted2">46%</span>) than non-ELL students (<span class="highlighted2">27%</span>).';

			$(pageId + ' .grade-sel').change(function(e) {
				var value = $(this).val();
				setContents(value);
			});
			function setContents(grade_subject) {
				var path = '/sites/cf/Resources/NCES%20NAEP/subject/studies/ELL/Images/grade_subject/Places/';
				switch (parseInt(grade_subject)) {
				case 40:
					$Part_Title.html(Part_Title['G4_R']);
					$Part_Img.attr('src', path + Part_Img['G4_R']);
					$Part_Text_I.html(Part_Text_I['G4_R']);
					$Part_Text_II.html(Part_Text_II['G4_R']);
					break;
				case 41:
					$Part_Title.html(Part_Title['G4_M']);
					$Part_Img.attr('src', path + Part_Img['G4_M']);
					$Part_Text_I.html(Part_Text_I['G4_M']);
					$Part_Text_II.html(Part_Text_II['G4_M']);
					break;
				case 80:
					$Part_Title.html(Part_Title['G8_R']);
					$Part_Img.attr('src', path + Part_Img['G8_R']);
					$Part_Text_I.html(Part_Text_I['G8_R']);
					$Part_Text_II.html(Part_Text_II['G8_R']);
					break;
				case 81:
					$Part_Title.html(Part_Title['G8_M']);
					$Part_Img.attr('src', path + Part_Img['G8_M']);
					$Part_Text_I.html(Part_Text_I['G8_M']);
					$Part_Text_II.html(Part_Text_II['G8_M']);
					break;
				default:
					break;
				}
			}

			setContents($(pageId + ' .grade-sel').val());
		}

	}

	function initEthnicity() {
		var pageId = "#image_4";
	initData();
	function initData() {
		var $Part_I_Title1 = $(pageId + " .Part_I_Title1");
		var $Part_I_Title2 = $(pageId + " .Part_I_Title2");

		var $Part_I_Text = $(pageId + " .Part_I_Text");
		var $Part_I_Img1 = $(pageId + " .Part_I_Img1");
		var $Part_I_Img2 = $(pageId + " .Part_I_Img2");

		var $Part_II_Title = $(pageId + " .Part_II_Title");
		var $Part_II_Note = $(pageId + " .Part_II_Note");
		var $Part_II_Text = $(pageId + " .Part_II_Text");
		var $Part_II_Img = $(pageId + " .Part_II_Img");

		var Part_I_Title1 = {};
		var Part_I_Title2 = {};
		var Part_I_Text = {};
		var Part_I_Img1 = {};
		var Part_I_Img2 = {};
		var Part_II_Title = {};
		var Part_II_Note = {};
		var Part_II_Text = {};
		var Part_II_Img = {};

		//Part_I Title1
		Part_I_Title1['G4_R'] = 'Percentage of students in grade 4 NAEP reading, by race/ethnicity and status as English language learners: 2013';
		Part_I_Title1['G4_M'] = 'Percentage of students in grade 4 NAEP mathematics, by race/ethnicity and status as English language learners: 2013';
		Part_I_Title1['G8_R'] = 'Percentage of students in grade 8 NAEP reading, by race/ethnicity and status as English language learners: 2013';
		Part_I_Title1['G8_M'] = 'Percentage of students in grade 8 NAEP mathematics, by race/ethnicity and status as English language learners: 2013';

		//Part_I Title2
		Part_I_Title2['G4_R'] = 'Percentage of students in grade 4 NAEP reading, by race/ethnicity and status as non-English language learners: 2013';
		Part_I_Title2['G4_M'] = 'Percentage of students in grade 4 NAEP mathematics, by race/ethnicity and status as non-English language learners: 2013';
		Part_I_Title2['G8_R'] = 'Percentage of students in grade 8 NAEP reading, by race/ethnicity and status as non-English language learners: 2013';
		Part_I_Title2['G8_M'] = 'Percentage of students in grade 8 NAEP mathematics, by race/ethnicity and status as non-English language learners: 2013';

		//Part_I Text
		Part_I_Text['G4_R'] = 'In 2013, a higher percentage of ELL students were Hispanic (<span class="highlighted">81%</span>) compared to non-ELL students (<span class="highlighted">18%</span>).';
		Part_I_Text['G4_M'] = 'In 2013, a higher percentage of ELL students were Hispanic (<span class="highlighted">82%</span>) compared to non-ELL students (<span class="highlighted">18%</span>).';
		Part_I_Text['G8_R'] = 'In 2013, a higher percentage of ELL students were Hispanic (<span class="highlighted2">79%</span>) compared to non-ELL students (<span class="highlighted2">20%</span>).';
		Part_I_Text['G8_M'] = 'In 2013, a higher percentage of ELL students were Hispanic (<span class="highlighted2">78%</span>) compared to non-ELL students (<span class="highlighted2">21%</span>).';

		//Part_I Image1
		Part_I_Img1['G4_R'] = 'Grade4_Reading_Perc.svg';
		Part_I_Img1['G4_M'] = 'Grade4_Mathematics_Perc.svg';
		Part_I_Img1['G8_R'] = 'Grade8_Reading_Perc.svg';
		Part_I_Img1['G8_M'] = 'Grade8_Mathematics_Perc.svg';

		//Part_I Image2
		Part_I_Img2['G4_R'] = 'Grade4_Reading_Perc_nonELL.svg';
		Part_I_Img2['G4_M'] = 'Grade4_Mathematics_Perc_nonELL.svg';
		Part_I_Img2['G8_R'] = 'Grade8_Reading_Perc_nonELL.svg';
		Part_I_Img2['G8_M'] = 'Grade8_Mathematics_Perc_nonELL.svg';

		//Part_II Title
		Part_II_Title['G4_R'] = 'Change in grade 4 NAEP reading average scores and score gaps, by status as English language learners and race/ethnicity: 1998, 2011, and 2013';
		Part_II_Title['G4_M'] = 'Change in grade 4 NAEP mathematics average scores and score gaps, by status as English language learners and race/ethnicity: 1996, 2011, and 2013';
		Part_II_Title['G8_R'] = 'Change in grade 8 NAEP reading average scores and score gaps, by status as English language learners and race/ethnicity: 1998, 2011, and 2013';
		Part_II_Title['G8_M'] = 'Change in grade 8 NAEP mathematics average scores and score gaps, by status as English language learners and race/ethnicity: 1996, 2011, and 2013';
        
        //Part_II_Note
        Part_II_Note['G4_R'] = 'NOTE: Black includes African American, Hispanic includes Latino, and Pacific Islander includes Native Hawaiian. Race categories exclude Hispanic origin. Sample sizes were insufficient to permit reliable estimates for White, Black, Asian/Pacific Islander, and American Indian/Alaska Native students in 1998. Differences were calculated using unrounded scale scores.'
        Part_II_Note['G4_M'] = 'NOTE: Black includes African American, Hispanic includes Latino, and Pacific Islander includes Native Hawaiian. Race categories exclude Hispanic origin. Sample sizes were insufficient to permit reliable estimates for White, Black, Asian/Pacific Islander, and American Indian/Alaska Native students in 1996. Differences were calculated using unrounded scale scores.'
        Part_II_Note['G8_R'] = 'NOTE: Black includes African American, Hispanic includes Latino, and Pacific Islander includes Native Hawaiian. Race categories exclude Hispanic origin. Sample sizes were insufficient to permit reliable estimates for White, Black, Asian/Pacific Islander, and American Indian/Alaska Native students in 1998. Differences were calculated using unrounded scale scores.'
        Part_II_Note['G8_M'] = 'NOTE: Black includes African American, Hispanic includes Latino, and Pacific Islander includes Native Hawaiian. Race categories exclude Hispanic origin. Sample sizes were insufficient to permit reliable estimates for White, Black, Asian/Pacific Islander, and American Indian/Alaska Native students in 1996. Differences were calculated using unrounded scale scores.'
                  
		//Part_II Text
		Part_II_Text['G4_R'] = 'Scores for Hispanic ELL students in grade 4 <span class="highlighted">increased by 19 points</span> from 1998 to 2013, keeping pace with the 18 point increase of non-ELL Hispanic students. The size of the gap between ELL and non-ELL Hispanic students did not change.';
		Part_II_Text['G4_M'] = 'Scores for Hispanic ELL students in grade 4 <span class="highlighted">increased by 20 points</span> from 1996 to 2013, keeping pace with the 26 point increase of non-ELL Hispanic students. The size of the gap between ELL and non-ELL Hispanic students did not change.';
		Part_II_Text['G8_R'] = 'Scores for Hispanic ELL students in grade 8 <span class="highlighted2">increased by 9 points</span> from 1998 to 2013, keeping pace with the 15 point increase of non-ELL Hispanic students. The size of the gap between ELL and non-ELL Hispanic students did not change.';
		Part_II_Text['G8_M'] = 'Scores for Hispanic ELL students in grade 8 <span class="highlighted2">increased by 19 points</span> from 1996 to 2013, keeping pace with the 21 point increase of non-ELL Hispanic students. The size of the gap between ELL and non-ELL Hispanic students did not change.';

		//Part_II_Img
		Part_II_Img['G4_R'] = 'Grade4_Reading_Gaps.png';
		Part_II_Img['G4_M'] = 'Grade4_Mathematics_Gaps.png';
		Part_II_Img['G8_R'] = 'Grade8_Reading_Gaps.png';
		Part_II_Img['G8_M'] = 'Grade8_Mathematics_Gaps.png';

		$(pageId + ' .grade-sel').change(function(e) {
			reset();
			var value = $(this).val();
			setContents(value);
		});
		function setContents(grade_subject) {
			var path = '/sites/cf/Resources/NCES%20NAEP/subject/studies/ELL/Images/grade_subject/Ethnicity/';
			// reset();
			switch (parseInt(grade_subject)) {
				case 40:
					$Part_I_Title1.html(Part_I_Title1['G4_R']);
					$Part_I_Title2.html(Part_I_Title2['G4_R']);
					$Part_I_Text.html(Part_I_Text['G4_R']);
					$Part_I_Img1.load(path + Part_I_Img1['G4_R'], addSVGEventOne);
					$Part_I_Img2.load(path + Part_I_Img2['G4_R'], addSVGEventTwo);
					$Part_II_Title.html(Part_II_Title['G4_R']);
                    $Part_II_Note.html(Part_II_Note['G4_R']);
					$Part_II_Text.html(Part_II_Text['G4_R']);
					$Part_II_Img.attr('src', path + Part_II_Img['G4_R']);
					break;
				case 41:
					$Part_I_Title1.html(Part_I_Title1['G4_M']);
					$Part_I_Title2.html(Part_I_Title2['G4_M']);
					$Part_I_Text.html(Part_I_Text['G4_M']);
					$Part_I_Img1.load(path + Part_I_Img1['G4_M'], addSVGEventOne);
					$Part_I_Img2.load(path + Part_I_Img2['G4_M'], addSVGEventTwo);
					$Part_II_Title.html(Part_II_Title['G4_M']);
                    $Part_II_Note.html(Part_II_Note['G4_M']);
					$Part_II_Text.html(Part_II_Text['G4_M']);
					$Part_II_Img.attr('src', path + Part_II_Img['G4_M']);
					break;
				case 80:
					$Part_I_Title1.html(Part_I_Title1['G8_R']);
					$Part_I_Title2.html(Part_I_Title2['G8_R']);
					$Part_I_Text.html(Part_I_Text['G8_R']);
					$Part_I_Img1.load(path + Part_I_Img1['G8_R'], addSVGEventOne);
					$Part_I_Img2.load(path + Part_I_Img2['G8_R'], addSVGEventTwo);
					$Part_II_Title.html(Part_II_Title['G8_R']);
                    $Part_II_Note.html(Part_II_Note['G8_R']);
					$Part_II_Text.html(Part_II_Text['G8_R']);
					$Part_II_Img.attr('src', path + Part_II_Img['G8_R']);
					break;
				case 81:
					$Part_I_Title1.html(Part_I_Title1['G8_M']);
					$Part_I_Title2.html(Part_I_Title2['G8_M']);
					$Part_I_Text.html(Part_I_Text['G8_M']);
					$Part_I_Img1.load(path + Part_I_Img1['G8_M'], addSVGEventOne);
					$Part_I_Img2.load(path + Part_I_Img2['G8_M'], addSVGEventTwo);
					$Part_II_Title.html(Part_II_Title['G8_M']);
                    $Part_II_Note.html(Part_II_Note['G8_M']);
					$Part_II_Text.html(Part_II_Text['G8_M']);
					$Part_II_Img.attr('src', path + Part_II_Img['G8_M']);
					break;
				default:
					break;
			}
		}

		setContents($(pageId + ' .grade-sel').val());
	}

    //open the all,remove the all
	$('.showAll').click(function(e) {
		if (hasClass($('#donutWrapper'), 'open')) {
			removeClass($('#donutWrapper'), 'open');
		}
		$('.exploded').each(function(i, item){
			removeClass($(item), 'exploded');
		});
	});
	function addSVGEventOne() {
		$('.Part_I_Img1 .pie').click(function(e) {
			e.stopPropagation();
           //make sure the other pies are blur
			if (!hasClass($('#donutWrapper'), 'open')) {
				addClass($('#donutWrapper'), 'open');
			}
			//find the last exploded class, let it become normal
			$('.exploded').each(function(i, item) {
				removeClass($(item), 'exploded');
			});
			//click the specific pie to explode it
			$('.' + $(this).attr('class').replace('pie', '').trim()).each(function(i, item) {
				addClass($(item), 'exploded');
			});
		});
	}

	function addSVGEventTwo() {

		$('.Part_I_Img2 .pie').click(function(e) {
			e.stopPropagation();

			if (!hasClass($('#donutWrapper'), 'open')) {
				addClass($('#donutWrapper'), 'open');
			}
			$('.exploded').each(function(i, item) {
				removeClass($(item), 'exploded');
			});
			$('.' + $(this).attr('class').replace('pie', '').trim()).each(function(i, item) {
				addClass($(item), 'exploded');
			});

		});
	}

	function hasClass($elem, cls) {
		return $('<b></b>').addClass($elem.attr('class')).hasClass(cls);
	}

	function addClass($elem, cls) {
		$elem.attr('class', $elem.attr('class') + ' ' + cls);

	}

	function removeClass($elem, cls) {
		$elem.attr('class', $elem.attr('class').replace(cls, ''));
	}
	
	function reset(){
		if(hasClass($('#donutWrapper'), 'open')){
		    removeClass($('#donutWrapper'), 'open');
		}
		console.log($('#donutWrapper').hasClass("open"));
	}

	}

}